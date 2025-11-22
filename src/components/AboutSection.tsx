import { Card, CardContent } from "../components/ui/card";
import { GraduationCap, Heart, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-4xl md:text-5xl font-serif text-primary">
              Quem sou
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </div>
          
          <Card className="border-2 border-primary/10 hover:border-primary/20 transition-all duration-300 hover-lift shadow-lg">
            <CardContent className="p-8 md:p-12 space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                Sou Amanda de Oliveira formada em Psicologia pela Universidade Braz Cubas em Mogi das Cruzes, 
                pós-graduada em <strong className="text-primary">TCC (Terapia Cognitivo-Comportamental)</strong>, <strong className="text-primary">PJ (Psicologia Jurídica)</strong> e <strong className="text-primary">ABA (Análise do Comportamento Aplicada)</strong>.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                Atuo no acolhimento e acompanhamento psicológico de adolescentes e adultos. 
                Meu trabalho é baseado em uma escuta sensível e ética, buscando oferecer suporte para lidar com 
                desafios emocionais, autoconhecimento, ansiedade, autoestima, relacionamentos e momentos de transição.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                Atendo de forma presencial e online, proporcionando praticidade e conforto para que se possa 
                cuidar da saúde mental no tempo e no ritmo de cada indivíduo.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <Card className="text-center hover-lift transition-all duration-300 border-2 border-primary/10 hover:border-primary/20 group">
              <CardContent className="p-8 space-y-4">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg text-foreground font-serif">Formação</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Psicologia + especializações em TCC, PJ e ABA
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift transition-all duration-300 border-2 border-accent/20 hover:border-accent/30 group">
              <CardContent className="p-8 space-y-4">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-semibold text-lg text-foreground font-serif">Abordagem</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Escuta sensível e ética, focada no indivíduo
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift transition-all duration-300 border-2 border-primary/10 hover:border-primary/20 group">
              <CardContent className="p-8 space-y-4">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-lg text-foreground font-serif">Público</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Adolescentes a partir de 14 anos e adultos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
