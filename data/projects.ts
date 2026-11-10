import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "gudang-kereta",
    slug: "gudang-kereta",
    title: "Gudang Kereta — Sistem Manajemen Armada & Operasional Perkeretaapian",
    description:
      "Sistem enterprise manajemen armada kereta api nasional dengan kalkulator tonase otomatis, engine perakitan formasi rangkaian (Stamformasi Builder) multi-lokomotif (Traksi Ganda), validasi beban keselamatan real-time, penjadwalan GAPEKA, dan penerbitan dokumen resmi Manifest Masinis.",
    thumbnail: "/images/projects/gudang-kereta.svg",
    images: ["/images/projects/gudang-kereta.svg"],
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
    title: "Rotiku — Modern Bakery Point of Sale & Inventory Platform",
    description:
      "Aplikasi kasir (Point of Sale) dan manajemen inventaris bakery modern. Dilengkapi fitur pencatatan stok bahan baku, resep produk, histori transaksi kasir, kalkulasi margin keuntungan, dan pelaporan keuangan real-time.",
    thumbnail: "/images/projects/toko-roti.png",
    images: ["/images/projects/toko-roti.png"],
    documentation: [
      "Antarmuka kasir responsif dan cepat dibangun dengan Next.js App Router dan Tailwind CSS.",
      "Pemodelan skema relasi basis data menggunakan Prisma ORM untuk multi-kategori produk dan histori transaksi.",
      "Penyusunan REST API terstruktur untuk operasional kasir, pemotongan stok otomatis, dan rekapitulasi penjualan.",
      "Desain antarmuka berorientasi kenyamanan kasir dengan navigasi sentuh dan pencarian instan."
    ],
    tech: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "REST API"],
    learned: [
      "Penerapan arsitektur Next.js modern dengan Server & Client Components.",
      "Manajemen state transaksi belanja dan pemutakhiran stok bahan secara atomik.",
      "Optimalisasi kueri relasional Prisma untuk agregasi penjualan dan laporan keuangan.",
    ],
    date: "2026-11",
    category: "Web",
    github: "https://github.com/FirdausRamdan21/toko-roti",
    live: "",
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
