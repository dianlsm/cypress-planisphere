# Hotel Example Site - Automation Testing with Cypress (POM)

Proyek ini berisi pengujian otomatis pada website [Hotel Example Site](https://hotel-example-site.takeyaqa.dev/en-US/) menggunakan **Cypress** dengan pendekatan **Page Object Model (POM)**.

---

## 🧪 Tujuan
- Melakukan pengujian end-to-end pada fitur yang tersedia di website hotel.
- Memastikan fungsi utama (reservasi, form, navigasi, dll) berjalan sesuai harapan.
- Mengimplementasikan struktur **Page Object Model** agar kode lebih terorganisir, reusable, dan mudah dirawat.

---

## 🛠️ Tech Stack
- [Cypress](https://www.cypress.io/) → Framework testing end-to-end.
- **JavaScript (ES6)** → Bahasa pemrograman.
- **Page Object Model (POM)** → Desain pattern untuk memisahkan test case dan action.

---

## 📂 Struktur Project
```bash
hotel-automation/
│
├── cypress/
│   ├── e2e/                 # Berisi test case utama
│   │   └── reservation.spec.js
│   │   └── signIn.spec.js
│   │   └── ...
│   │
│   ├── pages/               # Page Object Model (POM)
│   │   └── HomePage.js
│   │   └── ReservationPage.js
│   │   └── SignInPage.js
│   │
│   ├── fixtures/            # Data dummy (misal user.json, reservation.json)
│   │
│   └── support/             # Command & config tambahan
│
├── package.json
├── cypress.config.js
└── README.md
