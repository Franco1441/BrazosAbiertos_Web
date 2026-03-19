import {
  Header,
  HeroSection,
  AboutSection,
  ScheduleSection,
  ResourcesSection,
  VideoGridSection,
  FeatureSection,
  TeamSection,
  CTASection,
  BannerSection,
  Footer,
} from "@/components/landing";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Header
        brandName="TU MARCA"
        navItems={[
          { label: "Inicio", href: "#inicio" },
          { label: "Nosotros", href: "#nosotros" },
          { label: "Recursos", href: "#recursos" },
          { label: "Videos", href: "#videos" },
          { label: "Equipo", href: "#equipo" },
        ]}
        ctaLabel="En Vivo"
        ctaHref="#live"
      />

      {/* Hero Section */}
      <HeroSection
        subtitle="Bienvenido a nuestra comunidad"
        title="Su presencia transformando vidas, mañana, tarde y noche."
        description="Somos una comunidad que se reúne mañana, tarde y noche para ministrar al Señor a través de la adoración y la oración."
        primaryCta={{
          label: "En Vivo",
          href: "#live",
        }}
        secondaryCta={{
          label: "Mensajes",
          href: "#videos",
        }}
        backgroundImage="/images/hero-worship.jpg"
        showScrollIndicator={true}
        overlay="gradient"
        height="full"
      />

      {/* About Section */}
      <AboutSection
        id="nosotros"
        eyebrow="Nuestra Misión"
        title="Una comunidad que se reúne mañana, tarde y noche para ministrar al Señor."
        description="Existimos para ministrar al Señor dándole nuestra acción de gracias y alabanza, para adorarlo estando de acuerdo con quien Él es, e interceder estando de acuerdo con lo que Él desea hacer en nuestras vidas, ciudad y tierra."
        ctaLabel="Soy Nuevo"
        ctaHref="#nuevo"
        image="/images/community-gathering.jpg"
        imageAlt="Nuestra comunidad reunida"
      />

      {/* Building His House Feature */}
      <FeatureSection
        id="edificando"
        eyebrow="Construyendo Su Casa"
        title="Estamos expandiendo nuestra capacidad para que Su presencia transforme más vidas."
        description="Hace años, comenzamos con una pequeña reunión de oración que ha madurado hasta convertirse en una vibrante comunidad local que está impactando a la iglesia global hoy."
        ctaLabel="Conocer Más"
        ctaHref="#mas"
        image="/images/building-house.jpg"
        variant="image-background"
        height="tall"
      />

      {/* Resources Section */}
      <ResourcesSection
        id="recursos"
        title="Lanzamientos Recientes"
        subtitle="Ministramos al Señor mañana, tarde y noche. Nuestros proyectos musicales son el desborde de lo que hacemos como casa de oración."
        resources={[
          {
            title: "Plan Bíblico 365",
            description:
              "Una invitación para nuestra comunidad a ser transformados por la Palabra de Dios.",
            image: "/images/resource-bible.jpg",
            badge: "Nuevo",
          },
          {
            title: "Álbum Musical",
            description:
              "Escucha nuestro último álbum, disponible en todas las plataformas.",
            image: "/images/resource-music.jpg",
          },
          {
            title: "Cursos Online",
            description:
              "Acceso a contenido exclusivo de entrenamiento y enseñanza.",
            image: "/images/resource-school.jpg",
          },
        ]}
      />

      {/* Schedule Section */}
      <ScheduleSection
        id="horarios"
        title="Mañana, Tarde y Noche"
        subtitle="Sala de Oración Diaria"
        schedule={[
          { day: "Lunes", times: ["10:00 - 11:30", "18:00 - 19:30"] },
          { day: "Martes", times: ["18:00 - 19:30"] },
          {
            day: "Miércoles",
            times: ["18:00 - 19:30", "19:30 - 21:00"],
          },
          {
            day: "Jueves",
            times: ["10:00 - 11:30", "18:00 - 19:30", "19:30 - 21:00"],
          },
          { day: "Viernes", times: ["18:00 - 19:30"] },
        ]}
        backgroundColor="primary"
      />

      {/* Video Grid Section */}
      <VideoGridSection
        id="videos"
        title="Mañana, Tarde y Noche"
        categories={[
          {
            title: "Sala de Oración Diaria",
            viewMoreHref: "#",
            videos: [
              { id: "dQw4w9WgXcQ", title: "Sesión 1" },
              { id: "dQw4w9WgXcQ", title: "Sesión 2" },
              { id: "dQw4w9WgXcQ", title: "Sesión 3" },
              { id: "dQw4w9WgXcQ", title: "Sesión 4" },
            ],
          },
          {
            title: "Mensajes Principales",
            viewMoreHref: "#",
            videos: [
              { id: "dQw4w9WgXcQ", title: "Mensaje 1" },
              { id: "dQw4w9WgXcQ", title: "Mensaje 2" },
              { id: "dQw4w9WgXcQ", title: "Mensaje 3" },
              { id: "dQw4w9WgXcQ", title: "Mensaje 4" },
            ],
          },
        ]}
      />

      {/* School/Learning Feature */}
      <AboutSection
        id="escuela"
        eyebrow="Aprende a Vivir como Su Lugar de Reposo"
        title="Acceso a contenido exclusivo de entrenamiento y enseñanza de nuestra comunidad."
        description="Cada año recibimos estudiantes de todo el país. Ofrecemos programas únicos para estudiantes de primer año, segundo año y estudiantes en línea, todos compartiendo el mismo objetivo: proveer un entendimiento bíblico y práctico de lo que significa ministrar al Señor con sus vidas."
        ctaLabel="Conocer Más"
        ctaHref="#escuela"
        image="/images/resource-school.jpg"
        reverse={true}
      />

      {/* Team Section */}
      <TeamSection
        id="equipo"
        eyebrow="Nuestro Equipo"
        title="Liderazgo con Integridad"
        description="Las calificaciones en las Escrituras para los líderes pueden resumirse en compromiso, convicción, competencia y carácter. Nuestros líderes y miembros gobernantes se esfuerzan por la excelencia, integridad y vulnerabilidad como ejemplo para todos en la comunidad, en cada faceta de la vida."
        ctaLabel="Sobre Nosotros"
        ctaHref="#nosotros"
        image="/images/team-leadership.jpg"
      />

      {/* Partner CTA */}
      <CTASection
        id="ofrendar"
        eyebrow="Sé Parte"
        title="Únete a nosotros"
        description="Estás invitado a sembrar en el futuro de nuestra comunidad, a ministrar al Señor y construir Su casa con nosotros. ¿Te unes?"
        ctaLabel="Ofrendar"
        ctaHref="#dar"
        variant="primary"
      />

      {/* Announcement Banner */}
      <BannerSection
        eyebrow="Próximamente..."
        title="Estamos entrando en una nueva temporada"
        ctaLabel="Recibir Actualizaciones"
        ctaHref="#updates"
        secondaryCtaLabel="Preguntas Frecuentes"
        secondaryCtaHref="#faq"
        variant="gradient"
      />

      {/* Footer */}
      <Footer
        brandName="TU MARCA"
        columns={[
          {
            title: "Comunidad",
            links: [
              { label: "Nosotros", href: "#nosotros" },
              { label: "Equipo", href: "#equipo" },
              { label: "Ubicación", href: "#ubicacion" },
              { label: "Contacto", href: "#contacto" },
            ],
          },
          {
            title: "Recursos",
            links: [
              { label: "Música", href: "#musica" },
              { label: "Mensajes", href: "#mensajes" },
              { label: "Escuela", href: "#escuela" },
              { label: "Cursos", href: "#cursos" },
            ],
          },
          {
            title: "Conectar",
            links: [
              { label: "En Vivo", href: "#live" },
              { label: "Eventos", href: "#eventos" },
              { label: "Ofrendar", href: "#ofrendar" },
              { label: "Servir", href: "#servir" },
            ],
          },
        ]}
        bottomLinks={[
          { label: "Privacidad", href: "#privacidad" },
          { label: "Términos", href: "#terminos" },
        ]}
      />
    </main>
  );
}
