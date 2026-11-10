import type { Project } from "@/lib/types";

export const projects: Project[] = [
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
    live: "http://localhost/project%20pribadi/gudangKereta/",
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
