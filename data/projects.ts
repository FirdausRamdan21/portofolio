import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "bertemanyuk",
    slug: "bertemanyuk",
    title: "BertemanYuk — Aplikasi Komunitas & Komunikasi Jarak Jauh Real-Time",
    description:
      "Aplikasi komunitas komunikasi jarak jauh terinspirasi dari Discord untuk mencari teman baru, dilengkapi ruang obrolan real-time, panggilan suara WebRTC, dan ruang koleksi bertopik.",
    overview:
      "BertemanYuk adalah platform komunitas komunikasi jarak jauh berbasis web yang dibangun dengan tujuan mempertemukan pengguna lintas lokasi agar dapat menjalin pertemanan baru secara nyaman dan interaktif. Terinspirasi dari struktur server dan kanal Discord, aplikasi ini memadukan ruang obrolan teks real-time dengan filter pesan cerdas, panggilan suara peer-to-peer berbasis WebRTC lengkap dengan panel pesan pendamping, serta Ruang Koleksi untuk mengelompokkan topik diskusi berdasarkan sub-kategori minat.",
    highlights: [
      {
        title: "Autentikasi & OAuth Terpadu",
        description:
          "Mendukung masuk menggunakan Email & Kata Sandi maupun login instan melalui akun Google dan GitHub, dilengkapi alur pendaftaran akun baru yang ringkas.",
      },
      {
        title: "Ruang Obrolan Real-Time & Filter Cerdas",
        description:
          "Obrolan langsung (Live) dengan tab filter otomatis untuk memilah pesan berdasarkan Semua, Tautan, Potongan Kode, Saku Pesan, dan Solusi, serta pencarian pesan di dalam ruang.",
      },
      {
        title: "Fitur Teks Interaktif & Polling",
        description:
          "Mendukung berbagi potongan kode, teks tersembunyi ||spoiler||, pembuatan /poll instan untuk komunitas, @mention anggota, dan status aktivitas pribadi seperti 'Dengerin musik'.",
      },
      {
        title: "Ruang Suara WebRTC + Pesan Pendamping",
        description:
          "Panggilan suara peer-to-peer langsung di browser menggunakan WebRTC lengkap dengan pengaturan mikrofon/suara serta panel Pesan Pendamping untuk chat teks paralel saat mengobrol.",
      },
      {
        title: "Ruang Koleksi & Sub-Kategori Topik",
        description:
          "Wadah pengelompokan ruang diskusi terstruktur berdasarkan topik dan sub-kategori minat (misalnya koleksi galery-coding dengan sub-kategori diskusi teks & media) agar komunitas tetap rapi.",
      },
      {
        title: "Manajemen Server & Kehadiran Live",
        description:
          "Dilengkapi sistem multi-server, kode undangan server unik, pemisahan peran Pemilik & Pengguna, serta panel daftar anggota Online/Offline secara real-time.",
      },
    ],
    thumbnail: "/images/projects/bertemanyuk/obrolan-utama.png",
    images: [
      "/images/projects/bertemanyuk/obrolan-utama.png",
      "/images/projects/bertemanyuk/ruang-suara.png",
      "/images/projects/bertemanyuk/ruang-koleksi.png",
      "/images/projects/bertemanyuk/login.jpg",
    ],
    documentation: [
      "Dibangun dengan arsitektur web modern Next.js (App Router) dengan antarmuka dark-mode responsif yang terinspirasi dari pengalaman pengguna Discord.",
      "Implementasi komunikasi suara langsung antar pengguna secara peer-to-peer menggunakan WebRTC dengan kontrol perangkat audio dan panel Pesan Pendamping terintegrasi.",
      "Sistem kanal modular yang memisahkan Ruang Obrolan (teks), Ruang Suara (WebRTC), dan Ruang Koleksi (pengelompokan topik & sub-kategori).",
      "Klasifikasi pesan otomatis pada kanal obrolan (Tautan, Kode, Saku Pesan, Solusi) untuk memudahkan anggota menemukan kembali informasi penting.",
      "Sistem kehadiran pengguna (Online/Offline), status aktivitas kustom, serta manajemen kode undangan server untuk membangun komunitas baru dengan cepat."
    ],
    report: {
      title: "Pratinjau Antarmuka & Modul Fitur BertemanYuk",
      sections: [
        {
          module: "1. Akses & Autentikasi",
          title: "Portal Masuk & OAuth (Google / GitHub)",
          image: "/images/projects/bertemanyuk/login.jpg",
          points: [
            "Halaman autentikasi bertema gelap yang bersih dengan form Email dan Kata Sandi (dilengkapi toggle visibilitas sandi).",
            "Dukungan login cepat satu klik menggunakan Lanjutkan dengan Google dan Lanjutkan dengan GitHub.",
            "Tautan pendaftaran akun baru bagi pengguna yang ingin langsung bergabung ke komunitas real-time.",
          ],
        },
        {
          module: "2. Komunikasi Teks Real-Time",
          title: "Ruang Obrolan Utama (#obrolan-utama)",
          image: "/images/projects/bertemanyuk/obrolan-utama.png",
          points: [
            "Navigasi tiga kolom khas komunitas modern: bilah server di kiri, daftar ruang & status pengguna, area obrolan utama di tengah, serta daftar anggota Online/Offline di kanan.",
            "Dilengkapi filter pesan instan (Semua, Tautan, Kode, Saku Pesan, Solusi) dan kolom pencarian pesan di dalam ruang.",
            "Mendukung fitur teks kaya: berbagi potongan kode, sisipan ||spoiler||, perintah /poll instan, @mention, serta status aktivitas kustom seperti 'Dengerin musik'.",
          ],
        },
        {
          module: "3. Panggilan Suara Peer-to-Peer",
          title: "Ruang Suara WebRTC & Pesan Pendamping",
          image: "/images/projects/bertemanyuk/ruang-suara.png",
          points: [
            "Koneksi suara real-time secara peer-to-peer melalui WebRTC dengan tombol Gabung Ruang Suara, Nyalakan Mikrofon & Gabung, serta menu Pengaturan Suara.",
            "Terintegrasi dengan panel Pesan Pendamping di sisi kanan sehingga anggota tetap dapat berkirim pesan teks tanpa meninggalkan ruang panggilan suara.",
            "Menampilkan indikator jumlah peserta aktif di ruang dan status koneksi panggilan secara langsung.",
          ],
        },
        {
          module: "4. Pengorganisasian Topik Komunitas",
          title: "Ruang Koleksi & Sub-Kategori (galery-coding)",
          image: "/images/projects/bertemanyuk/ruang-koleksi.png",
          points: [
            "Wadah khusus untuk mengelompokkan ruang diskusi berdasarkan topik dan sub-kategori minat anggota.",
            "Dilengkapi tombol + Tambah Ruang dan Pengaturan Koleksi bagi pemilik/pengelola server.",
            "Menampilkan kartu ruang diskusi teks & media lengkap dengan indikator jumlah anggota aktif serta akses cepat Buka Ruang Obrolan.",
          ],
        },
      ],
    },
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WebRTC",
      "OAuth (Google & GitHub)",
      "Real-Time Chat",
    ],
    learned: [
      "Merancang arsitektur komunikasi suara peer-to-peer berbasis WebRTC beserta manajemen sinyal dan pengaturan audio pengguna.",
      "Membangun tata letak aplikasi komunitas multi-panel (server, daftar kanal, area obrolan, pesan pendamping, dan panel kehadiran anggota).",
      "Mengimplementasikan parser fitur teks interaktif (kode, spoiler, polling, mention) dan pengelompokan kanal berbasis koleksi sub-kategori.",
    ],
    date: "2026-11",
    category: "Web",
    github: "",
    live: "",
    featured: true,
    pinned: true,
  },
  {
    id: "charactertodolist",
    slug: "charactertodolist",
    title: "QuestLife RPG (Character To-Do List) — Manajemen Rutinitas Bergamifikasi",
    description:
      "Aplikasi manajemen tugas dan kebiasaan harian berbasis gamifikasi RPG dengan sistem EXP, Gold, Tavern, inventaris grid, Mode Guest sandbox, dan notifikasi Telegram.",
    overview:
      "QuestLife RPG (Character To-Do List) adalah aplikasi manajemen produktivitas dan rutinitas harian berbasis Laravel yang mengubah daftar tugas menjadi petualangan RPG. Setiap misi (Quest) dan kebiasaan (Habit) yang diselesaikan memberikan EXP, Gold, dan menambah rentetan hari (Streak) karakter; sebaliknya, misi yang terlewat akan berdampak pada kondisi karakter. Pengguna juga dapat membelanjakan Gold di Tavern, membuat Custom Reward pribadi, menata barang dalam tas inventaris berbasis grid, mencatat refleksi di Jurnal, serta menerima pengingat otomatis melalui Telegram Bot.",
    highlights: [
      {
        title: "Gamification Engine & Progresi Level",
        description:
          "Menghitung perolehan EXP dan Gold berdasarkan tingkat kesulitan misi, menaikkan level dengan kurva progresif (MaxEXP = Level × 150 + Level² × 25), serta melacak streak harian secara otomatis.",
      },
      {
        title: "Manajemen Misi (Quest) & Habit",
        description:
          "Mendukung tugas sekali selesai maupun kebiasaan berulang (HABIT), catatan refleksi saat menyelesaikan tugas, serta pencatatan penalti ketika misi terlewat (miss).",
      },
      {
        title: "Tavern, Custom Reward & Inventaris Grid",
        description:
          "Toko Tavern tempat menukar Gold dengan item atau membuat Custom Reward pribadi, dikelola melalui sistem tas inventaris berbasis grid (pindah slot, gunakan, atau buang item).",
      },
      {
        title: "Alun-Alun, Jurnal & Gudang Pribadi",
        description:
          "Menyediakan papan pengumuman komunitas (Alun-Alun), histori aktivitas & refleksi karakter (Jurnal), serta penyimpanan berkas dan galeri gambar pribadi (Gudang).",
      },
      {
        title: "Mode Guest Sandbox & Telegram Bot",
        description:
          "Mode Guest berbasis sesi untuk mencoba seluruh mekanik RPG tanpa daftar akun dan tanpa menulis ke database, ditambah integrasi Webhook Telegram untuk notifikasi tugas.",
      },
      {
        title: "Program Wali Kota (Admin Control Panel)",
        description:
          "Peran khusus Wali Kota untuk mengatur NPC, menyesuaikan harga dan menyegarkan stok Tavern, menerbitkan pengumuman Alun-Alun, serta mengelola akun warga.",
      },
    ],
    thumbnail: "/images/projects/charactertodolist.svg",
    images: ["/images/projects/charactertodolist.svg"],
    documentation: [
      "Dibangun menggunakan Laravel 13, PHP 8.3+, Tailwind CSS v4, dan Vite 8 dengan pemisahan layer Service yang rapi (GamificationEngine, InventoryGridService, GuestSandboxService, TelegramNotifier).",
      "Transaksi database atomik dengan row-level locking (lockForUpdate) saat penyelesaian misi agar kalkulasi EXP, Gold, dan level-up konsisten tanpa race condition.",
      "Arsitektur 10 model relasional (User, UserCharacter, Quest, ShopItem, TavernStock, TavernSetting, UserInventory, ActivityLog, InformationBoard, WarehouseItem).",
      "Middleware kustom auth.or.guest untuk mendukung perpindahan mulus antara pengguna terdaftar dan sesi Mode Guest sandbox, serta middleware role walikota untuk panel manajemen ekonomi.",
      "Endpoint API webhook Telegram (/api/telegram/webhook) terintegrasi dengan pengujian koneksi langsung dari halaman pengaturan profil."
    ],
    tech: [
      "Laravel 13",
      "PHP 8.3",
      "Tailwind CSS v4",
      "Vite 8",
      "SQLite / MySQL",
      "Telegram Bot API",
      "RBAC",
    ],
    learned: [
      "Merancang service-layer Gamification Engine yang transaksional dan aman terhadap konkurensi menggunakan DB::transaction dan lockForUpdate.",
      "Membangun sistem Guest Sandbox berbasis session sehingga pengunjung dapat merasakan pengalaman penuh aplikasi tanpa mengotori basis data produksi.",
      "Mengintegrasikan webhook Telegram Bot dan mekanisme inventaris grid dinamis dalam aplikasi web Laravel modern.",
    ],
    date: "2026-11",
    category: "Web",
    github: "",
    live: "",
    featured: true,
    pinned: true,
  },
  {
    id: "bedahkarya",
    slug: "bedahkarya",
    title: "BedahKarya — Platform Komunitas Kreatif & Bedah Karya",
    description:
      "Platform komunitas kreatif terinspirasi dari Lahelu, Instagram, dan Discord untuk berbagi karya, berdiskusi konstruktif, DM, dan mengikuti event komunitas.",
    overview:
      "BedahKarya adalah platform jejaring sosial dan komunitas kreatif berbasis web yang terinspirasi dari perpaduan Lahelu, Instagram, dan Discord. Aplikasi ini menggabungkan feed konten berkategori & meme (Lahelu), galeri eksplorasi visual & DM sosial (Instagram), serta sistem moderasi peran, badge spesial, dan event komunitas (Discord) dalam satu ekosistem yang terkurasi dan aman.",
    thumbnail: "/images/projects/bedahkarya/eksplorasi.jpg",
    images: [
      "/images/projects/bedahkarya/eksplorasi.jpg",
      "/images/projects/bedahkarya/event.jpg",
    ],
    documentation: [
      "Menggabungkan konsep feed kategori komunitas & meme (Lahelu), galeri eksplorasi visual & DM sosial (Instagram), serta sistem badge spesial, event, dan moderasi peran (Discord).",
      "Perancangan skema basis data MySQL kompleks dengan 19 model relasional dan 8 enum menggunakan Prisma ORM v6.",
      "Fitur Smart Search & Eksplorasi mendukung pencarian teks bebas, #tag, @username, kategori (Karya, Meme, Teknis, Pendidikan, Sosial), dan subkategori.",
      "Editor unggahan lengkap dengan mode Gambar (Portrait 4:5 & Landscape 16:9 dengan kanvas crop/pan/zoom) maupun kartu Teks, draf tersimpan, serta Mode Fokus (sembunyikan jumlah suka).",
      "Sistem komunikasi Pesan Langsung (DM), Pusat Notifikasi terkategori, serta Panel Admin & Moderator (manajemen pengguna, penangguhan, uji banding, badge spesial, dan event komunitas)."
    ],
    report: {
      title: "Pratinjau Fitur Utama BedahKarya",
      sections: [
        {
          module: "1. Eksplorasi & Kurasi Konten",
          title: "Halaman Eksplorasi & Smart Search",
          image: "/images/projects/bedahkarya/eksplorasi.jpg",
          points: [
            "Pencarian terpadu untuk judul, deskripsi, alat, #tag, maupun @username kreator.",
            "Filter kategori konten dinamis: Semua Kategori, Konten Karya, Konten Meme, Konten Teknis, Konten Pendidikan, dan Konten Sosial.",
            "Menampilkan kartu karya visual (ilustrasi, UI/UX, tipografi, identitas visual) dan catatan editorial berbasis teks dalam grid responsif.",
          ],
        },
        {
          module: "2. Komunitas & Gamifikasi",
          title: "Event Komunitas BedahKarya",
          image: "/images/projects/bedahkarya/event.jpg",
          points: [
            "Menampilkan daftar event kurasi dan tantangan komunitas yang sedang berlangsung (seperti Event Inspirasi #inspirasi dan Event Pembukaan Baru #pembukaanbaru).",
            "Mendukung partisipasi langsung melalui tombol Ikuti Event dan Unggah Konten Event.",
            "Dikelola secara dinamis melalui Panel Spesial oleh Admin dan Moderator bersama sistem Badge Spesial komunitas.",
          ],
        },
      ],
    },
    tech: [
      "Next.js 15",
      "React 19",
      "MySQL",
      "Prisma ORM",
      "Tailwind CSS v4",
      "JWT (jose)",
      "RBAC",
    ],
    learned: [
      "Merancang arsitektur platform sosial full-stack dengan 19 model relasional, algoritma feed, DM, dan notifikasi terkategori.",
      "Mengimplementasikan sistem moderasi multi-peran (Admin, Moderator, User, Guest) lengkap dengan mekanisme laporan dan uji banding.",
      "Membangun autentikasi aman berbasis JWT (jose) dan bcryptjs serta proteksi media unggahan.",
    ],
    date: "2026-11",
    category: "Web",
    github: "https://github.com/FirdausRamdan21/bedahkarya",
    live: "",
    featured: true,
    pinned: true,
  },
  {
    id: "gudang-kereta",
    slug: "gudang-kereta",
    title: "Gudang Kereta — Sistem Manajemen Armada & Operasional Perkeretaapian",
    description:
      "Sistem enterprise manajemen armada kereta api nasional dengan kalkulator tonase otomatis, engine perakitan formasi rangkaian (Stamformasi Builder) multi-lokomotif (Traksi Ganda), validasi beban keselamatan real-time, penjadwalan GAPEKA, dan penerbitan dokumen resmi Manifest Masinis.",
    thumbnail: "/images/projects/gudang-kereta-preview.jpg",
    images: [
      "/images/projects/gudang-kereta-preview.jpg",
      "/images/projects/gudang-kereta.svg",
    ],
    documentation: [
      "Perancangan arsitektur basis data relasional 9 tabel dengan integritas foreign key dan indeks teroptimasi.",
      "Engine validasi tonase real-time: membandingkan total berat sarana (kosong + kargo) dengan batas daya tarik lokomotif untuk mencegah overload.",
      "Mekanisme penguncian siklus armada (Fleet Lifecycle Locking) saat kereta berstatus 'Dalam Perjalanan'.",
      "Penerbitan dokumen dinas resmi siap cetak (Print-Ready) Maklumat Perjalanan KA & Manifest Masinis.",
      "Implementasi Role-Based Access Control (RBAC) memisahkan wewenang Superadmin (Direktur) dan Admin (Petugas Dipo/PPKA)."
    ],
    tech: ["PHP 8.3", "MySQL 8.4", "Bootstrap 5.3", "JavaScript", "RBAC", "PDO", "GAPEKA"],
    learned: [
      "Mengadopsi terminologi dan standar operasional perkeretaapian industri nasional ke dalam rekayasa perangkat lunak.",
      "Perancangan logika perakitan multi-entitas (Multi-Lokomotif & Multi-Sarana) dengan kalkulasi keselamatan berat.",
      "Pengembangan sistem berbasis sesi aman dengan CSRF protection dan sanitasi input ketat.",
    ],
    date: "2026-11",
    category: "Web",
    github: "https://github.com/FirdausRamdan21/gudang-kereta",
    live: "",
    featured: true,
    pinned: true,
  },
  {
    id: "toko-roti-pos",
    slug: "toko-roti-pos",
    title: "Toko Roti Kashipanya — Modern Bakery Pre-Order & POS Platform",
    description:
      "Aplikasi kasir (Point of Sales), sistem Pre-Order (PO), manajemen dapur resep, gudang bahan baku, dan portal pelanggan bakery artisan modern. Dilengkapi kontrol akses multi-peran (Superadmin, Kasir/Petugas, dan Pembeli), mode gelap, serta laporan keuangan dan peringkat produk real-time.",
    logo: "/images/projects/toko-roti/logo-kashipanya.jpg",
    thumbnail: "/images/projects/toko-roti-kashipanya.jpg",
    images: [
      "/images/projects/toko-roti-kashipanya.jpg",
      "/images/projects/toko-roti/admin-dashboard.png",
      "/images/projects/toko-roti/admin-pesanan-po.png",
      "/images/projects/toko-roti/admin-kasir-pos.png",
      "/images/projects/toko-roti/admin-dapur-resep.png",
      "/images/projects/toko-roti/admin-bahan-baku.png",
      "/images/projects/toko-roti/admin-laporan.png",
      "/images/projects/toko-roti/user-etalase.png",
      "/images/projects/toko-roti/user-pesanan-po.png",
    ],
    documentation: [
      "Antarmuka login terpadu dan dashboard operasional responsif dibangun dengan Next.js App Router dan Tailwind CSS.",
      "Modul Admin lengkap: Dashboard Metrik Harian, Manajemen Pesanan (PO), Kasir Transaksi (POS), Dapur Resep Roti, Gudang Bahan Baku, dan Laporan Penjualan.",
      "Modul Pelanggan khusus: Etalase Rekomendasi & Katalog Roti terintegrasi Form Pemesanan PO serta halaman Riwayat & Cetak Nota Mandiri.",
      "Pemodelan skema relasi basis data dengan Prisma ORM untuk pemotongan stok bahan baku otomatis saat produksi (Buat Roti) dilakukan.",
      "Dukungan tiga metode pembayaran (Uang Tunai, QRIS, Kartu) serta mode terang dan gelap (Dark Mode)."
    ],
    report: {
      title: "Laporan Dokumentasi Sistem Toko Roti Kashipanya",
      documentUrl: "/files/Laporan-Dokumentasi-Toko-Roti-Kashipanya.docx",
      sections: [
        {
          module: "1. Modul Admin (Admin Experience)",
          title: "Dashboard Utama",
          image: "/images/projects/toko-roti/admin-dashboard.png",
          points: [
            "Menampilkan ringkasan metrik penting harian: jumlah pesanan PO menunggu, pendapatan hari ini, total stok roti, dan notifikasi bahan baku menipis.",
            "Menyajikan tabel pesanan PO terbaru yang memuat informasi kode PO, nama dan instansi pemesan, rincian makanan, total harga, serta status konfirmasi.",
          ],
        },
        {
          module: "1. Modul Admin (Admin Experience)",
          title: "Manajemen Pesanan (PO)",
          image: "/images/projects/toko-roti/admin-pesanan-po.png",
          points: [
            "Memuat daftar keseluruhan pre-order dari pelanggan.",
            "Menyediakan tombol aksi cepat pada setiap baris pesanan untuk melihat Detail, melakukan Edit, mencetak Nota, atau Menghapus pesanan.",
          ],
        },
        {
          module: "1. Modul Admin (Admin Experience)",
          title: "Kasir Transaksi (Point of Sales)",
          image: "/images/projects/toko-roti/admin-kasir-pos.png",
          points: [
            "Menampilkan katalog roti yang tersedia beserta stok dan harga.",
            "Menyediakan keranjang transaksi interaktif di sisi kanan layar.",
            "Mendukung pencarian nama pelanggan terdaftar maupun penambahan pelanggan baru.",
            "Mengakomodasi tiga metode pembayaran: Uang Tunai, QRIS, dan Kartu.",
            "Terdapat tautan pintas menuju halaman Beli Bahan Baku.",
          ],
        },
        {
          module: "1. Modul Admin (Admin Experience)",
          title: "Dapur Resep Roti",
          image: "/images/projects/toko-roti/admin-dapur-resep.png",
          points: [
            "Menampilkan daftar produk roti lengkap dengan estimasi waktu pembuatan.",
            "Merinci takaran kebutuhan bahan baku untuk setiap satu satuan produksi (pcs atau loyang).",
            "Memiliki fungsi eksekusi produksi melalui tombol Buat Roti yang akan memotong stok bahan baku dan menambah stok roti jadi.",
          ],
        },
        {
          module: "1. Modul Admin (Admin Experience)",
          title: "Gudang Bahan Baku",
          image: "/images/projects/toko-roti/admin-bahan-baku.png",
          points: [
            "Menyajikan tabel inventaris bahan baku dengan kolom kode bahan, nama bahan baku, stok tersedia, satuan, dan nama supplier.",
            "Menyediakan fungsi kelola data melalui opsi Detail, Edit, dan Hapus pada masing-masing item inventaris.",
          ],
        },
        {
          module: "1. Modul Admin (Admin Experience)",
          title: "Laporan Penjualan & Produksi",
          image: "/images/projects/toko-roti/admin-laporan.png",
          points: [
            "Menyediakan panel filter berdasarkan rentang tanggal dan metode pembayaran.",
            "Menampilkan rekapitulasi total pendapatan yang dirinci berdasarkan jenis pembayaran (Tunai, QRIS, Kartu).",
            "Menyajikan tabel peringkat penjualan roti terlaris beserta kontribusi pendapatannya.",
            "Memuat log rincian nota transaksi lengkap dengan nomor invoice, tanggal, nama pelanggan, dan total transaksi.",
          ],
        },
        {
          module: "2. Modul Pelanggan (User Experience)",
          title: "Etalase Toko Roti",
          image: "/images/projects/toko-roti/user-etalase.png",
          points: [
            "Menyajikan halaman utama yang berisi Rekomendasi Roti dan Etalase Toko Roti untuk melihat seluruh katalog.",
            "Menyediakan integrasi langsung dengan Form Pesanan (PO) di sisi kanan layar.",
            "Formulir mencakup pengisian nama pemesan, instansi, kontak telepon dan email, alamat lengkap, daftar roti yang dipesan dari keranjang, serta pilihan metode pembayaran.",
          ],
        },
        {
          module: "2. Modul Pelanggan (User Experience)",
          title: "Pesanan PO Saya",
          image: "/images/projects/toko-roti/user-pesanan-po.png",
          points: [
            "Halaman riwayat transaksi khusus pelanggan untuk melacak status pesanan.",
            "Menampilkan daftar pesanan dengan rincian nama, instansi, rincian makanan, harga, serta tombol untuk melihat Detail pesanan atau mencetak Nota secara mandiri.",
          ],
        },
      ],
    },
    tech: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "REST API"],
    learned: [
      "Penerapan arsitektur Next.js modern dengan Server & Client Components.",
      "Manajemen state transaksi belanja dan pemutakhiran stok bahan secara atomik (resep ke bahan baku).",
      "Optimalisasi kueri relasional Prisma untuk agregasi penjualan, peringkat produk, dan laporan keuangan.",
    ],
    date: "2026-11",
    category: "Web",
    github: "https://github.com/FirdausRamdan21/tokoRoti",
    live: "https://toko-roti-kashipan-f0rxx17hu-mrfirdausramdan-9155s-projects.vercel.app/dashboard",
    featured: true,
    pinned: true,
  },
  {
    id: "japanese-club-web",
    slug: "japanese-club-web",
    title: "Website Official Japanese Club Baka Danger",
    description:
      "Portal web resmi organisasi ekstrakurikuler Japanese Club SMKN 8 Jakarta sebagai pusat publikasi kegiatan, galeri dokumentasi acara, kalender program kerja, dan sistem informasi keanggotaan.",
    thumbnail: "/images/projects/japanese.png",
    images: ["/images/projects/japanese.png"],
    documentation: [
      "Pengembangan website responsif dari tahap wireframing hingga deployment produksi.",
      "Penerjemahan kebutuhan pengurus organisasi menjadi antarmuka digital yang interaktif dan mudah diakses.",
      "Penerapan continuous deployment melalui Vercel dengan optimasi performa dan SEO."
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    learned: [
      "Membangun arsitektur frontend web modern dan ramah perangkat seluler dari nol.",
      "Koordinasi dan komunikasi intensif dengan tim pengurus untuk validasi kebutuhan pengguna.",
      "Penerapan praktik terbaik SEO, optimasi aset gambar, dan performa web Core Web Vitals.",
    ],
    date: "2025-03",
    category: "Web",
    github: "https://github.com/FirdausRamdan21/Japanese",
    live: "https://bakadangerjp.vercel.app/",
    featured: true,
    pinned: true,
  },
  {
    id: "servicehub-mentari",
    slug: "servicehub-mentari",
    title: "ServiceHub — Service Ticket & Logistic Dispatch System",
    description:
      "Platform manajemen tiket servis barang elektronik dan peralatan industri. Menyediakan pelacakan status teknisi, riwayat perbaikan klien, serta pembuatan dan pencetakan surat jalan pengiriman barang secara otomatis.",
    thumbnail: "/images/projects/service-barang.svg",
    images: ["/images/projects/service-barang.svg"],
    documentation: [
      "Sistem penomoran tiket servis dan surat jalan otomatis berbasis kode unik terstandar.",
      "Modul cetak dokumen serah terima dan surat jalan logistik format profesional.",
      "Dashboard metrik pemantauan status tiket: Menunggu Pengecekan, Dalam Pengerjaan, Selesai, dan Overdue."
    ],
    tech: ["PHP", "MySQL", "Bootstrap 5", "JavaScript", "FPDF"],
    learned: [
      "Otomatisasi alur kerja administrasi perbaikan teknis dan operasional pergudangan.",
      "Pengelolaan relasi data multi-klien dan penanganan riwayat garansi peralatan.",
      "Standarisasi format cetak dokumen legal operasional bisnis.",
    ],
    date: "2026-10",
    category: "Web",
    github: "https://github.com/FirdausRamdan21/service-barang",
    live: "",
    featured: false,
    pinned: false,
  }
];
