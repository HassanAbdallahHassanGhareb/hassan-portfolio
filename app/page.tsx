"use client";

import {
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaDownload,
  FaServer,
  FaNetworkWired,
  FaShieldAlt,
  FaCode,
  FaTools,
  FaCircle,
  FaTerminal,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLanguage,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050b16] text-gray-200 font-mono relative overflow-x-hidden">

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none
        bg-[linear-gradient(rgba(0,255,255,0.04)_1px,transparent_1px),
        linear-gradient(90deg,rgba(0,255,255,0.04)_1px,transparent_1px)]
        bg-[size:40px_40px]" />

      {/* Glow */}
      <div className="hidden md:block absolute top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative z-10">
        <div className="max-w-3xl w-full">

          <div className="bg-black/80 border border-cyan-500/30 p-10 rounded-2xl shadow-[0_0_50px_rgba(0,200,255,0.3)] text-left">

            <p className="text-green-400 flex items-center gap-2">
              <FaTerminal />
              system_admin@enterprise:~#
            </p>

<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 text-white leading-tight">
  <span className="text-white">Hassan Abdallah </span>
  <span className="
    text-transparent 
    bg-clip-text 
    bg-gradient-to-r 
    from-cyan-400 
    via-blue-400 
    to-cyan-300
    drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]
    animate-pulse
  ">
    Ghareb
  </span>
</h1>

            <p className="text-cyan-400 mt-4 text-lg">
              Senior System Administrator & IT Infrastructure Specialist
            </p>

            <div className="mt-8 space-y-2 text-sm text-gray-400">
              <StatusLine label="Infrastructure" />
              <StatusLine label="Security Layer" />
              <StatusLine label="Backup System" />
            </div>
          </div>

          {/* Main Buttons */}
          <div className="flex gap-4 mt-12 justify-center flex-wrap">

            <a href="/cv.pdf" download
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-white transition">
              <FaDownload className="inline mr-2" />
              Download CV
            </a>

            <a href="#experience"
              className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg transition">
              View Experience
            </a>

            <a href="#contact"
              className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg text-white transition">
              Contact Me
            </a>

          </div>

          {/* Social Buttons */}
          <div className="flex justify-center gap-4 mt-10 flex-wrap">

            <a
              href="https://www.linkedin.com/in/hassan-abdallah-hassan-ghareb-0b44b2337"
              target="_blank"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-lg text-white transition"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="https://www.facebook.com/hsn.bdallh.ghryb"
              target="_blank"
              className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 px-5 py-3 rounded-lg text-white transition"
            >
              <FaFacebook />
              Facebook
            </a>

            <a
              href="https://wa.me/201095432213"
              target="_blank"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-5 py-3 rounded-lg text-white transition"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

          </div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl text-cyan-400 mb-8">Professional Summary</h2>
        <div className="bg-black/70 border border-cyan-500/20 p-8 rounded-xl space-y-4 text-gray-300">
          <p>
            Experienced IT Professional with over 6 years of hands-on experience in system administration,
            network infrastructure, cybersecurity, and enterprise IT solutions.
          </p>
          <p>
            Holding a Bachelor's degree in Information Technology from Al-Azhar University (2021),
            I have successfully managed enterprise environments across multiple industries.
          </p>
          <p>
            Highly skilled in Windows Server administration, virtualization technologies,
            firewall security, backup solutions, and network communications.
          </p>
          <p>
            Strong analytical mindset with exceptional troubleshooting and leadership abilities.
          </p>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl text-cyan-400 text-center mb-12">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <SkillCard icon={<FaServer />} title="Server & Virtualization" items={[
            "Windows Server (DNS, DHCP, AD, GPO)",
            "Active Directory",
            "Hyper-V",
            "Azure",
            "VMware ESXi",
            "Nutanix",
            "Microsoft SCCM"
            
          ]} />

          <SkillCard icon={<FaNetworkWired />} title="Networking" items={[
            "Cisco Networking",
            "VLAN / VPN",
            "Firewall (Sophos XG, Fortinet)",
            "Cisco VoIP",
            "Grandstream Networks",
            "PBX Systems"
          ]} />

          <SkillCard icon={<FaShieldAlt />} title="Security & Backup" items={[
            "Veeam Backup & Replication",
            "Kaspersky Endpoint Security",
            "Safetica",
            "Zoho IT Management",
            "Linux,Management",
            "IP camera system",
            "CCTV Systems"
          ]} />

          <SkillCard icon={<FaTools />} title="Technical Support" items={[
            "Hardware & Software Troubleshooting",
            "Workstation Deployment",
            "Microsoft System Center Configuration Manager",
            "Network Communication Support"
            
             
          ]} />

          <SkillCard icon={<FaCode />} title="Programming & Tools" items={[
            "HTML / CSS / JavaScript",
            "Python",
            "WordPress",
            "Git & GitHub"
          ]} />

        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl text-cyan-400 text-center mb-12">Professional Experience</h2>
        <Timeline items={[
          "System Administrator – Egyptian Countryside Development Company",
          "IT Manager – Future Office Furniture",
          "IT Manager – IT Services",
          "IT Specialist – Bosltk Real Estate",
          "IT Technical Support – PPS Schools",
          "Instructor – Tatawar Training Academy & IT Hub Academy",
          "Speaker – Google Developer Group Cairo"
        ]} />
      </section>

      {/* ================= EDUCATION ================= */}
      <section className="py-16 text-center">
        <h2 className="text-2xl text-cyan-400 mb-4">Education</h2>
        <p>Bachelor of Science in Information Technology</p>
        <p>Al-Azhar University – 2021</p>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section className="py-16 text-center">
        <h2 className="text-2xl text-cyan-400 mb-6">Certifications</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "CCNA", "MCSA", "ICDL",
            "Linux Administration",
            "Sophos XG Firewall",
            "Fortinet Firewall",
            "ESXi Virtualization",
            "Million Arab Programmer Initiative"
          ].map((cert, i) => (
            <span key={i} className="border border-cyan-500 px-4 py-1 rounded-full text-sm">
              {cert}
            </span>
          ))}
        </div>
      </section>

      {/* ================= LANGUAGES ================= */}
      <section className="py-16 text-center">
        <h2 className="text-2xl text-cyan-400 mb-4 flex justify-center gap-2 items-center">
          <FaLanguage /> Languages
        </h2>
        <p>Arabic (Native)</p>
        <p>English (C1 – Professional)</p>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24 text-center">
        <h2 className="text-3xl text-cyan-400 mb-8">Contact</h2>
        <p className="flex justify-center gap-2"><FaMapMarkerAlt /> Egypt, Ash Sharqia, Belbes</p>
        <p className="flex justify-center gap-2"><FaEnvelope /> hassanteka123@gmail.com</p>
        <p className="flex justify-center gap-2"><FaPhone /> +20 109 543 2213</p>
      </section>

    </main>
  );
}

/* ================= Components ================= */

function StatusLine({ label }: { label: string }) {
  return (
    <p>
      &gt; {label}:
      <span className="ml-2 text-green-400 inline-flex items-center gap-2">
        <FaCircle size={8} />
        ACTIVE
      </span>
    </p>
  );
}

function SkillCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-[#0f172a] border border-cyan-500/20 p-6 rounded-xl">
      <div className="text-cyan-400 text-2xl mb-4">{icon}</div>
      <h4 className="font-bold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <FaCircle className="text-green-400 mt-1" size={8} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Timeline({ items }: { items: string[] }) {
  return (
    <div className="border-l-2 border-cyan-500 pl-6 space-y-6">
      {items.map((item, i) => (
        <div key={i} className="relative">
          <span className="absolute -left-[14px] top-2 w-3 h-3 bg-cyan-400 rounded-full"></span>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}