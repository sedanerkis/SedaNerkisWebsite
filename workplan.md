# Seda Nerkis – Kişisel Website: AI Ajan Talimatları

## Görevin Özeti

Seda Nerkis için kişisel bir website oluştur. Seda, İstanbul merkezli bir Bilinçaltı Danışmanı, Eğitmen, Aile Danışmanı ve Sosyologdur. Site 3 sayfadan oluşacak, fotoğraf alanları placeholder olarak bırakılacak ve Docker ile deploy edilebilir olacak.

---

## Kullanacağın Stack

- **Framework:** Astro (statik output modu)
- **Stil:** Tailwind CSS
- **Serve:** Nginx (Docker içinde)
- **Container:** Docker multi-stage build

Başka bir stack seçme. Açıklama: Bu boyutta içerik odaklı bir site için Astro en uygun seçimdir; sıfır JS gönderir, yerleşik görsel optimizasyonu vardır ve statik build → Nginx ile Docker deploy en küçük, en hızlı üretim imajını üretir.

---

## Proje Klasör Yapısı

Aşağıdaki yapıyı tam olarak oluştur:

```
seda-nerkis-website/
├── public/
│   ├── images/
│   │   ├── profile/          # Boş bırak, placeholder kullan
│   │   ├── sessions/         # Boş bırak, placeholder kullan
│   │   └── og/               # Boş bırak
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── HeroSection.astro
│   │   └── ContactCTA.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro
│       ├── hakkimda.astro
│       └── birlikte.astro
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## Tasarım Kısıtlamaları

- **Font:** Başlıklar → `Playfair Display`, Body → `Inter` (Google Fonts CDN)
- **Renk paleti:** Krem/bej (`#F5F0E8`), koyu kahve (`#2C1810`), soft terracotta (`#C4704A`), açık sage (`#8FA68E`) — bilinçaltı/şifa temasıyla uyumlu
- **Ton:** Minimal, sakin, profesyonel. Aşırı animasyon veya parlak renkler kullanma.
- **Responsive:** Mobil-first tasarım, tüm sayfalar mobilde düzgün görünmeli.
- **Görseller:** Gerçek fotoğraflar yok. Her fotoğraf alanına boyut bilgisi içeren gri placeholder div koy (örn. `bg-gray-200` + boyut yazısı). Dosya adı ve açıklama yorumunu koda ekle.

---

## Sayfa İçerikleri

### Sayfa 1: Ana Sayfa — `src/pages/index.astro`

**Hero bölümü:**
- Sol: Seda'nın profil fotoğrafı → placeholder `profile-main.jpg` (3:4 oran, ~400×533px)
- Sağ: İsim ("Seda Nerkis"), unvanlar ("Bilinçaltı Danışmanı · Eğitmen · Aile Danışmanı · Sosyolog"), kısa bir davet cümlesi, "Tanışalım" CTA butonu

**Teaser bölümleri:**
- "Ben Kimim" → kısa özet + `/hakkimda` linki
- "Birlikte Neler Yapabiliriz?" → kısa özet + `/birlikte` linki

**Footer CTA:**
- "Tanışma görüşmesi için bana ulaşın" + e-posta / iletişim placeholder linki

---

### Sayfa 2: Ben Kimim — `src/pages/hakkimda.astro`

Aşağıdaki içeriği sayfaya yerleştir. Metni değiştirme, olduğu gibi kullan:

**Üst bölüm:**
- Fotoğraf placeholder: `profile-main.jpg` (kare, ~300×300px)
- Ad: **Seda Nerkis**
- Unvanlar: Bilinçaltı Danışmanı · Eğitmen · Aile Danışmanı · Sosyolog

**Hikaye (paragraf olarak):**

> 1985 yılında İstanbul'da başlayan hikayem, İtalyan Lisesi'nin ardından tam burslu olarak kazandığım Yeditepe Üniversitesi Görsel İletişim Tasarımı Bölümü'nü birincilikle bitirdim. Üniversitedeki son yılımdan itibaren kurumsal hayatı deneyimlediğim süreç bana asıl merakımın başka olduğunu fark ettirdi. "Kendim olabileceğim alanı bulma" motivasyonu ile çıktığım yolda, 2013 yılından beri bilinçaltı süreçleri, ilişki dinamikleri ve insan ruhunun şifası üzerine çalışıyorum.
>
> Yepyeni bir yol ve alana geçmiş olmanın merakı ve öğrenme isteğiyle bir taraftan danışmanlık yaparken bir yandan da bilinçaltının gizemli işleyişini sadece sezgilerle değil, akademik bir zeminle de temellendirmek adına İstanbul Üniversitesi'nde önce Sosyoloji ve devamında Çocuk Gelişimi bölümlerini tamamladım. Bunlarla eşzamanlı olarak katıldığım farklı eğitim ve sınavların ardından MEB onaylı Aile Danışmanıyım.
>
> Bilinçdışı süreçler ve beyinle ilgili daha da artan merakım ve öğrenme arzum beni Üsküdar Üniversitesi Nörobilim Yüksek Lisans programına götürdü. Bugün çalışmalarımı; nörobilimin rasyonel verileri ile bilinçaltının işleyişi ve dilini birleştirerek kurguluyorum.

**Eğitim & Sertifikalar (grid kart formatında, her biri ayrı kart):**
- Kuantum Koçluk
- Maya Şamanizmi
- Budizme Giriş
- Meditasyon
- Reiki
- Evrensel Şifa
- Nefes Terapisi
- Access Bars
- Masal Anlatıcılığı
- Eğiticinin Eğitimi

**Uzmanlık Alanları (ayrı bölüm):**
- Bilinçaltı Danışmanlık
- Aile Danışmanlığı
- Nefes Uygulayıcılığı
- Kişisel Gelişim Eğitmeni

**İkinci fotoğraf placeholder:** `profile-secondary.jpg` (~600×400px, yatay)

---

### Sayfa 3: Birlikte Neler Yapabiliriz — `src/pages/birlikte.astro`

**Açılış alıntısı (blockquote olarak):**
> "Hayat, biz başka planlar yaparken başımıza rastgele gelenler değil; anne rahmindeki sürecimizden itibaren olanları nasıl anlamlandırdığımız ve zihnimizin derinliklerinde nasıl kodladığımızdır."

**Giriş paragrafı:**
> Bu yolculuk, hayat akmaya devam ederken kendinizle kuracağınız yeni ilişkiyi ve kendiniz olarak yürüyeceğiniz yeni bir yolu yaratır. Başlaması ve devam etmesi için tek ihtiyaç kendi rızanız. Başkalarının hatırı, ricası ya da zorlamasıyla değil; sadece kendiniz için atmak istediğiniz o tek bir adımla her şey başlar.

**Bölümler (her biri `<h2>` başlık + paragraf; accordion değil, düz scroll):**

**İçinizdeki Evreni Keşfetmek İster misiniz?**
> Niels Bohr, atomu bir güneş sistemine benzetmişti; tıpkı o atom gibi, her insan da kendi içinde devasa bir evren ve sistemdir. Bizi biz yapan şey, dışarıdan görünen fiziksel yapıdan çok daha fazla ve çok daha komplikedir.
>
> Kuantum Alan Teorisi'ne göre her şey etkileşim halindedir. Biz de zihnimiz, ruhumuz, genetik mirasımız, bilinçaltımız ve karmik aktarımlarımızla koca bir bütünüz. Bugün yaşadığınız –veya yaşayamadığınız– her şey, bu dinamiklerin ortak bir sonucudur. Örneğin, dışarıdan sadece bir "para kazanamama" sorunu gibi görünen durumun altında çalışan onlarca farklı dinamik olabilir. Amacımız, o buzdağının altındaki nedenleri anlayarak görünürdeki sorunu dönüştürmek.

**Değişmek Mümkün mü?**
> Bildiğimiz en küçük parçacık olan kuarkların katı maddeler olmadığı, enerji kümeleri olduğu ortaya çoktan çıktı. Bu bilgiyi binlerce yıllık kadim öğretilerin aktardığı evreni ve insanı oluşturan en temel şeyin enerji olduğu inancının minik bir destekleyicisi gibi almayı seçebiliriz. Bunca yıldır hem kendi hayatımda hem de danışanlarımın deneyimlerinde defalarca şahitlik ettiğim şu gerçeğe ikna olarak bu yolculuğa başlamanızı önemsiyorum: hiçbir şey katı, değişmez ve keskin sınırlardan ibaret değildir. Beynimizin, biyolojimizin ve doğanın düzeninde esneklik, değişim ve dönüşüm hep vardır. Bunu kabul etmeden, buna inanıp güvenmeden başlanan değişim yolculukları ya yarım ya da sonuçsuz kalacaktır.

**Her Şeyi Değiştirmek Zorunda mıyım?**
> Nasıl ki ışık hızı ya da yerçekimi gibi evrensel sabitlerin kabul gördüğü bir dünyadaysak kendi bireysel evrenlerimizin de belli sabitleri olabilir. Bu yolculukta bazı alanlarda radikal değişimleri başlatırken bir kısım özelliklerinizi ve alanları değişime zorlamak yerine hayatınızı kolaylaştıracak şekilde kullanmayı ve düzenlemeyi öğreneceksiniz.
>
> Bildiğim ve güvendiğim yöntemlerle gerçekleştireceğimiz enerji çalışmalarının yanısıra nörobilim temelli yöntemlerle zihinsel ve davranışsal boyutu da çalışmalarımıza dahil edeceğiz. Böylece kendinizi tanımanızı, gölgelerinizi keşfetmenizi ve zorlandığınız yerleri kolaylaştırabilmenizi sağlamak üzere birlikte bir yol yürüyeceğiz.

**Ne Kadar Zamana İhtiyacım Var?**
> Köklü inançları, otomatikleşmiş davranışları, tekrarlayan hikayeleri dönüştürmek kararlılık, cesaret, emek ve biraz da zaman gerektirir. Tek bir seanla her şeyi kalıcı olarak çözmeyi beklemek yıllar boyu yaşanmış deneyimleri ve duyguları hafife almak olacaktır. Haftada bir ya da iki haftada bir görüşmeler planlayarak sürdürebileceğimiz bir rutine birlikte karar verebiliriz.

**Gelirken Yanımda Ne Getirmeliyim?**
> Öncelikle akut bir sorun yaşıyorsanız daha iyi ya da sakin olmayı beklemenize gerek yok. Ayrıca insanların sorunlarının yanında sizinkinin önemsiz olduğu düşüncesiyle kendinizi desteksiz ve yalnız bırakmanıza da hiç gerek yok. Herhangi bir ön hazırlığa gerek olmadan sadece gelmek istemeniz yeterli. İkimize de uygun ortak zamanı belirledikten sonra buluşuyoruz ve sizin hayatınızda "sorun" olarak tanımladığınız alanı dinleyerek başlıyoruz.

**Başka Bir Sorunuz mu Var?**
> Seanslara başlamadan önce kısa bir tanışma görüşmesi yapmak, yüz yüze veya sesli bir iletişim kurmak, aklınıza takılanları sormak isterseniz bana her zaman ulaşabilirsiniz.

Bu bölümün altına `ContactCTA.astro` bileşenini dahil et.

**Fotoğraf placeholder:** Sayfanın ortasına uygun bir yere `session-1.jpg` (~700×400px) placeholder koy.

---

## Oluşturulacak Dosyalar

Her dosyayı gerçekten oluştur, boş bırakma.

### `astro.config.mjs`
```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [tailwind()],
});
```

### `tailwind.config.mjs`
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        brown: '#2C1810',
        terracotta: '#C4704A',
        sage: '#8FA68E',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

### `package.json`
Astro + Tailwind bağımlılıklarını ekle. Scriptler: `"build": "astro build"`, `"dev": "astro dev"`, `"preview": "astro preview"`.

### `src/layouts/BaseLayout.astro`
- `<head>` içinde: Google Fonts (Playfair Display + Inter), Tailwind, meta charset/viewport
- Props: `title`, `description`
- `<slot />` ile içerik alanı
- `Header.astro` ve `Footer.astro` dahil et

### `src/components/Header.astro`
- Logo/İsim: "Seda Nerkis" (sol)
- Nav linkleri: Ana Sayfa · Ben Kimim · Birlikte Neler Yapabiliriz (sağ)
- Mobilde hamburger menü (Tailwind ile)

### `src/components/Footer.astro`
- Telif hakkı: "© 2025 Seda Nerkis"
- Sosyal medya linkleri için placeholder (`href="#"`)

### `src/components/ContactCTA.astro`
- Arka plan: terracotta rengi bölüm
- Başlık: "Tanışma Görüşmesi İçin Ulaşın"
- Buton: `href="mailto:info@sedanerkis.com"` (placeholder)

---

## Docker Dosyaları

### `Dockerfile`
```dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### `docker-compose.yml`
```yaml
version: '3.9'
services:
  website:
    build: .
    container_name: seda-nerkis-site
    ports:
      - "80:80"
    restart: unless-stopped
```

### `nginx.conf`
```nginx
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;

    gzip on;
    gzip_types text/css application/javascript image/svg+xml;

    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|webp|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }
}
```

---

## SEO Meta Verileri

Her sayfa için `BaseLayout.astro`'ya şu değerleri geçir:

| Sayfa | title | description |
|-------|-------|-------------|
| `index.astro` | Seda Nerkis – Bilinçaltı Danışmanı | Seda Nerkis ile bilinçaltı danışmanlığı, aile danışmanlığı ve kişisel gelişim yolculuğunuza başlayın. |
| `hakkimda.astro` | Ben Kimim – Seda Nerkis | Seda Nerkis'in hikayesi: Görsel iletişim tasarımından bilinçaltı danışmanlığına, nörobilimden şifaya uzanan yolculuk. |
| `birlikte.astro` | Birlikte Neler Yapabiliriz – Seda Nerkis | Bilinçaltı danışmanlığında süreç nasıl işler? Sorularınızın cevapları ve tanışma görüşmesi için bilgiler. |

---

## Görseller İçin Placeholder Kuralları

Gerçek fotoğraf yok. Her görsel alanı için şu yapıyı kullan:

```html
<!-- PLACEHOLDER: profile-main.jpg – Seda'nın profesyonel profil fotoğrafı (3:4) -->
<div class="bg-gray-200 flex items-center justify-center text-gray-400 text-sm"
     style="width: 400px; height: 533px;">
  profile-main.jpg
</div>
```

Tüm placeholder'lar:

| Dosya adı | Boyut | Kullanım yeri |
|-----------|-------|---------------|
| `profile-main.jpg` | 400×533px | Ana sayfa hero, Hakkımda üst |
| `profile-secondary.jpg` | 600×400px | Hakkımda alt |
| `session-1.jpg` | 700×400px | Birlikte sayfası |

---

## Tamamlama Kriterleri

Aşağıdakiler sağlanmadan görevi tamamlanmış sayma:

- [ ] `npm run build` hata vermeden çalışıyor
- [ ] `docker compose up --build` ile site `localhost:80`'de açılıyor
- [ ] 3 sayfa erişilebilir: `/`, `/hakkimda`, `/birlikte`
- [ ] Tüm içerikler yukarıdaki metinlerle birebir uyuşuyor
- [ ] Tüm görseller placeholder div olarak işaretlenmiş ve yorumlanmış
- [ ] Mobilde responsive görünüm çalışıyor
- [ ] Her sayfada doğru `<title>` ve `<meta description>` var
