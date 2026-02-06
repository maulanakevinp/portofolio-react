export default function Projects() {
  const projectList = [
    {
      title: 'SSO UIII',
      description: 'Sign Single On UIII',
      image: '/img/projects/SSO UIII - 1.png',
      link: '/projects/sso-uiii'
    },
    {
      title: 'NSS',
      description: 'Not So Sin (NSS)',
      image: '/img/projects/NSS.png',
      link: '/projects/nss'
    },
    {
      title: 'Saldo.ai',
      description: 'Website Saldo.ai',
      image: '/img/projects/saldoai.png',
      link: '/projects/saldo.ai'
    },
    {
      title: 'DPMD - Dinas Pemberdayaan Masyarakat dan Desa Kab. Jember',
      description: 'Website sistem informasi untuk Dinas Pemberdayaan Masyarakat dan Desa Kab. Jember',
      image: '/img/projects/dpmd.png',
      link: '/projects/dpmd'
    },
    {
      title: 'ERP - Lab Populer',
      description: 'Website ERP (Enterprise Resource Planning) pada Perusahaan PT. Populer Sarana Medika',
      image: '/img/projects/ERP.png',
      link: '/projects/erp-labpopuler'
    },
    {
      title: 'Desa Sumber Gading',
      description: 'Website sistem informasi desa terpadu di Desa Sumber Gading Kecamatan Sumber Wringin Kabupaten Bondowoso',
      image: '/img/projects/SumberGading.png',
      link: '/projects/desa-sumbergading'
    },
    {
      title: 'Desa Lengkong',
      description: 'Website sistem informasi desa terpadu di Desa Lengkong Kecamatan Mumbulsari Kabupaten Jember',
      image: '/img/projects/Lengkong.png',
      link: '/projects/desa-lengkong'
    },
    {
      title: 'Sistem Informasi Akuntansi',
      description: 'Website sistem informasi akuntansi',
      image: '/img/projects/Akuntansi.png',
      link: '/projects/akuntansi'
    },
    {
      title: 'Black Orange CCTV',
      description: 'Website e-commerce atau toko online yang menggunakan API WhatsApp untuk pemesanan produk milik PT. HITAM ORANYE INDONESIA',
      image: '/img/projects/blackorangecctv.png',
      link: '/projects/blackorangecctv'
    },
    {
      title: 'Desa Arjasa',
      description: 'Website sistem informasi manajemen pelayanan desa di Arjasa Kecamatan Arjasa Kabupaten Jember',
      image: '/img/projects/arjasa.png',
      link: '/projects/desa-arjasa'
    },
    {
      title: 'PGN Indonesia',
      description: 'Website sistem informasi manajemen perijinan kerja pada Perusahaan GAS NEGARA INDONESIA Tbk',
      image: '/img/projects/pgn.png',
      link: '/projects/pgn-indonesia'
    },
    {
      title: 'BwiJuaraTrip',
      description: 'Website sistem informasi penjualan tiket wisata yang terintegrasi dengan payment gateway menggunakan API Ipaymu.',
      image: '/img/projects/bwijuaratrip.png',
      link: '/projects/bwijuaratrip'
    },
    {
      title: 'SDUNEJ',
      description: 'Website sistem informasi edukasi yang dicanangkan oleh LP2M UNEJ untuk mahasiswa KKN Back to Village.',
      image: '/img/projects/sdunej.png',
      link: '/projects/sdunej'
    },
    {
      title: 'UKMK ETALASE',
      description: 'Website profile UKMK ETALASE',
      image: '/img/projects/etalase.png',
      link: '/projects/etalase'
    },
    {
      title: 'Sistem Informasi Absensi',
      description: 'Website sistem informasi manajemn absensi menggunakan ip wifi kantor untuk melakukan presensi pada perusahaan PT.Grhayasa Nusacitra Estima',
      image: '/img/projects/absensi.png',
      link: '/projects/absensi'
    },
    {
      title: 'BosGerobak',
      description: 'Website e-commerce atau toko online yang menggunakan API WhatsApp untuk pemesanan produk',
      image: '/img/projects/bosgerobak.png',
      link: '/projects/bosgerobak'
    },
    {
      title: 'SPOT',
      description: 'Website sistem informasi geografis menggunakan library leaflet js',
      image: '/img/projects/spot.png',
      link: '/projects/spot'
    },
    {
      title: 'PRIMAPERS',
      description: 'Website profile UKM Primapers UNEJ dan dengan menggunakan sistem blog',
      image: '/img/projects/primapers.png',
      link: '/projects/primapers'
    },
    {
      title: 'XYLODECORATION',
      description: 'Website e-commerce atau toko online yang menggunakan API WhatsApp untuk pemesanan produk',
      image: '/img/projects/xylodecoration.png',
      link: '/projects/xylodecoration'
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Recent Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg card-hover">
                <a href={project.link} className="block">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <div className="p-6">
                  <h6 className="text-lg font-semibold text-gray-800 mb-2">
                    <a href={project.link} className="hover:text-blue-600 transition">
                      {project.title}
                    </a>
                  </h6>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
