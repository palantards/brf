"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  FileText,
  MessageSquare,
  Users,
  Clock,
  AlertCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// Component for scroll-triggered animations
function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Något gick fel. Försök igen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section with Gradient */}
      <section className="relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-black pointer-events-none" />

        {/* Floating gradient orbs with animation */}
        <motion.div
          className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/30 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/20 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative container mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-40">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full mb-8 border border-white/20"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium">
                Snart lansering – Anmäl ditt intresse
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight px-4"
            >
              Slipp stressen
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
                i styrelsearbetet
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed px-4"
            >
              Ett enkelt verktyg som gör styrelsearbetet smidigare. Hantera
              felanmälningar, dokument och kommunikation med boende på ett
              ställe.
            </motion.p>

            {/* Email Signup Form */}
            {!submitted ? (
              <motion.form
                variants={fadeInUp}
                onSubmit={handleSubmit}
                className="max-w-md mx-auto mb-6 px-4"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="din.epost@exempel.se"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                    className="w-full h-14 sm:flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 backdrop-blur-sm rounded-xl text-base"
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="w-full sm:w-auto h-14 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 rounded-xl shadow-lg shadow-blue-500/50 transition-all duration-200"
                    >
                      {loading ? "Skickar..." : "Anmäl intresse"}
                      {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
                    </Button>
                  </motion.div>
                </div>
                {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto mb-6 p-5 bg-green-500/20 border border-green-500/30 rounded-xl backdrop-blur-sm mx-4"
              >
                <p className="text-green-300 flex items-center gap-2 justify-center font-medium text-base">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  Tack! Vi hör av oss snart.
                </p>
              </motion.div>
            )}

            <motion.p
              variants={fadeInUp}
              className="text-sm text-gray-400 px-4"
            >
              Vi söker 10 BRF:er i Stockholm/Göteborg som vill vara med från
              start
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
              Känner ni igen er?
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              De flesta BRF-styrelser kämpar med samma problem
            </p>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-fr gap-4 md:gap-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: AlertCircle,
                gradient: "from-red-500 to-pink-500",
                title: "Kaos vid styrelsebyten",
                description:
                  "När nya ledamöter kommer in försvinner kunskap. Dokumenten är utspridda i mejl, mappar och Google Drive.",
              },
              {
                icon: Clock,
                gradient: "from-orange-500 to-yellow-500",
                title: "För mycket administration",
                description:
                  "Obetalda volontärer spenderar timmar på att hantera felanmälningar, svara på frågor och leta dokument.",
              },
              {
                icon: MessageSquare,
                gradient: "from-purple-500 to-blue-500",
                title: "Fragmenterad kommunikation",
                description:
                  "Mejl, Facebook, papperslappar i trapphuset. Ingen vet var man hittar information.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={scaleIn} className="h-full">
                <motion.div
                  className="h-full"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full min-h-[260px] group">
                    <CardContent className="pt-8 pb-8 px-6 h-full flex flex-col">
                      <motion.div
                        className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6`}
                        whileHover={{
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-base">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black via-gray-900/50 to-black relative overflow-hidden">
        {/* Subtle animated background */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-6 relative">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
              Allt på ett ställe
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              BRF Manager samlar det viktigaste i ett enkelt verktyg
            </p>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: AlertCircle,
                gradient: "from-blue-500 to-cyan-500",
                title: "Felanmälan",
                description:
                  "Boende rapporterar problem direkt i systemet. Styrelsen ser allt på ett ställe, kan tilldela ansvar och spåra status. Ingen mer mejlröra.",
              },
              {
                icon: FileText,
                gradient: "from-green-500 to-emerald-500",
                title: "Dokumentarkiv",
                description:
                  "Stadgar, årsredovisningar, protokoll, försäkringsbrev. Strukturerat, sökbart och tillgängligt för nya styrelseledamöter.",
              },
              {
                icon: MessageSquare,
                gradient: "from-purple-500 to-pink-500",
                title: "Digital anslagstavla",
                description:
                  "Skicka meddelanden till alla boende. Automatiska mejlnotiser. Ingen mer papperslappar som ingen läser.",
              },
              {
                icon: Users,
                gradient: "from-orange-500 to-red-500",
                title: "Boenderegistret",
                description:
                  "Håll koll på vem som bor var, kontaktuppgifter och in-/utflyttningar. Alltid uppdaterat.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div
                  className="flex gap-5 md:gap-6 p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold px-4">
                Vanliga frågor
              </h2>
            </AnimatedSection>

            <motion.div
              className="space-y-4 md:space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {[
                {
                  q: "Kan vi börja använda detta nu?",
                  a: "Inte än! Vi bygger just nu första versionen. Vi söker 10 BRF-styrelser som vill vara med och påverka hur produkten blir. Ni får testa gratis och komma med feedback.",
                },
                {
                  q: "När lanserar ni?",
                  a: "Vi siktar på att ha en fungerande version klar inom 2-3 månader. De första 10 BRF:erna som anmäler sig får testa den innan alla andra.",
                },
                {
                  q: "Vad kostar det?",
                  a: "Vi har inte bestämt priset än. Det beror på vad som är rimligt för er – därför vill vi prata med riktiga styrelser först. Men det kommer att vara mycket billigare än vad ni betalar till förvaltaren idag.",
                },
                {
                  q: "Hur svårt är det att komma igång?",
                  a: "Vårt mål är att det ska ta max 30 minuter. Ladda upp era dokument, bjud in boende, klar. Vi kommer ha videotutorials och svensk support.",
                },
                {
                  q: "Funkar det med BankID?",
                  a: "Ja! BankID-inloggning är planerat från start. Det är en självklarhet för ett svenskt verktyg.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-black pointer-events-none" />
        <motion.div
          className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/30 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/20 rounded-full blur-[100px] md:blur-[120px] pointer-events-none"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 px-4">
              Vill du vara med från start?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed px-4">
              Vi söker 10 BRF-styrelser i Stockholm/Göteborg som vill hjälpa oss
              bygga rätt verktyg från början. Testa gratis och påverka hur det
              blir.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6 px-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="din.epost@exempel.se"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                    className="w-full h-14 sm:flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 backdrop-blur-sm rounded-xl text-base"
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="w-full sm:w-auto h-14 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 rounded-xl shadow-lg shadow-blue-500/50 transition-all duration-200"
                    >
                      {loading ? "Skickar..." : "Anmäl intresse"}
                    </Button>
                  </motion.div>
                </div>
                {error && <p className="text-red-300 text-sm mt-3">{error}</p>}
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-md mx-auto p-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl mx-4"
              >
                <p className="text-white flex flex-col sm:flex-row items-center gap-2 justify-center font-medium text-base sm:text-lg">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                  <span>Perfekt! Vi kontaktar dig inom 48 timmar.</span>
                </p>
              </motion.div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-8 md:py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm md:text-base">
            © 2026{" "}
            <a
              href="https://goatchu.com"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Goatchu
            </a>
            . Byggt i Sverige, för svenska BRF:er.
          </p>
        </div>
      </footer>
    </div>
  );
}
