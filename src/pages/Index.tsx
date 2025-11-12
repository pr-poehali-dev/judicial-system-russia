import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const courtLevels = [
    {
      title: "Конституционный Суд РФ",
      icon: "Scale",
      description: "Высший судебный орган конституционного контроля",
      powers: [
        "Разрешение дел о соответствии Конституции РФ федеральных законов",
        "Толкование Конституции Российской Федерации",
        "Разрешение споров о компетенции между органами государственной власти"
      ]
    },
    {
      title: "Верховный Суд РФ",
      icon: "Landmark",
      description: "Высший судебный орган по гражданским, уголовным, административным и иным делам",
      powers: [
        "Рассмотрение дел в качестве суда второй инстанции",
        "Надзор за деятельностью судов общей юрисдикции",
        "Дача разъяснений по вопросам судебной практики"
      ]
    },
    {
      title: "Суды общей юрисдикции",
      icon: "Building2",
      description: "Районные, городские, областные и другие суды",
      powers: [
        "Рассмотрение гражданских дел",
        "Рассмотрение уголовных дел",
        "Рассмотрение административных дел"
      ]
    },
    {
      title: "Арбитражные суды",
      icon: "Briefcase",
      description: "Специализированные суды по экономическим спорам",
      powers: [
        "Разрешение экономических споров между организациями",
        "Дела о несостоятельности (банкротстве)",
        "Корпоративные споры"
      ]
    }
  ];

  const courtTypes = [
    {
      name: "Мировые судьи",
      jurisdiction: "Гражданские дела до 100 000 руб., административные правонарушения, уголовные дела небольшой тяжести"
    },
    {
      name: "Районные суды",
      jurisdiction: "Основное звено судебной системы, рассматривают большинство гражданских и уголовных дел"
    },
    {
      name: "Областные суды",
      jurisdiction: "Суды субъектов РФ, апелляционная инстанция, особо сложные дела первой инстанции"
    },
    {
      name: "Военные суды",
      jurisdiction: "Дела о преступлениях военнослужащих, споры в Вооруженных Силах РФ"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Icon name="Scale" size={48} className="text-secondary" />
            <h1 className="text-4xl font-bold">Судебная система Российской Федерации</h1>
          </div>
          <p className="text-lg opacity-90 max-w-3xl">
            Официальная информация о структуре, полномочиях и деятельности судебных органов России
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Icon name="Building" size={32} className="text-secondary" />
            Структура судебной власти
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {courtLevels.map((court, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-secondary">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Icon name={court.icon as any} size={32} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{court.title}</h3>
                    <p className="text-muted-foreground mb-4">{court.description}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-foreground">Полномочия:</p>
                      <ul className="space-y-1">
                        {court.powers.map((power, pidx) => (
                          <li key={pidx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <Icon name="CheckCircle2" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                            <span>{power}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Icon name="Network" size={32} className="text-secondary" />
            Уровни судебной системы
          </h2>
          
          <Tabs defaultValue="hierarchy" className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-2 mb-6">
              <TabsTrigger value="hierarchy">Иерархия судов</TabsTrigger>
              <TabsTrigger value="types">Виды судов</TabsTrigger>
            </TabsList>
            
            <TabsContent value="hierarchy" className="animate-fade-in">
              <Card className="p-8">
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-3 bg-secondary/20 px-6 py-4 rounded-lg mb-4">
                      <Icon name="Crown" size={28} className="text-secondary" />
                      <h3 className="text-2xl font-bold">Конституционный Суд РФ</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Конституционный контроль</p>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-px h-12 bg-border"></div>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-4 rounded-lg mb-4">
                      <Icon name="Landmark" size={28} className="text-primary" />
                      <h3 className="text-2xl font-bold">Верховный Суд РФ</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Высшая судебная инстанция</p>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-px h-12 bg-border"></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="inline-flex items-center gap-3 bg-muted px-6 py-4 rounded-lg mb-4">
                        <Icon name="Building2" size={24} />
                        <h4 className="text-xl font-semibold">Суды общей юрисдикции</h4>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• Областные суды</p>
                        <p>• Районные суды</p>
                        <p>• Мировые судьи</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="inline-flex items-center gap-3 bg-muted px-6 py-4 rounded-lg mb-4">
                        <Icon name="Briefcase" size={24} />
                        <h4 className="text-xl font-semibold">Арбитражные суды</h4>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• Арбитражные апелляционные суды</p>
                        <p>• Арбитражные суды субъектов РФ</p>
                        <p>• Суд по интеллектуальным правам</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="types" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                {courtTypes.map((type, idx) => (
                  <Card key={idx} className="p-6 border-l-4 border-l-secondary">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{type.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{type.jurisdiction}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Icon name="HelpCircle" size={32} className="text-secondary" />
            Часто задаваемые вопросы
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">Как устроена судебная система России?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Судебная система РФ состоит из Конституционного Суда, Верховного Суда, судов общей юрисдикции и арбитражных судов. 
                Каждый уровень выполняет свои функции в соответствии с Конституцией РФ и федеральными законами.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">В какой суд обращаться с гражданским иском?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Гражданские дела рассматриваются судами общей юрисдикции. Дела с ценой иска до 100 000 рублей рассматривают мировые судьи, 
                более крупные споры — районные суды. Экономические споры между юридическими лицами рассматривают арбитражные суды.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">Что делает Конституционный Суд?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Конституционный Суд проверяет соответствие законов и нормативных актов Конституции РФ, разрешает споры о компетенции 
                между органами власти, толкует положения Конституции. Это высший орган конституционного контроля в стране.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">Чем отличаются арбитражные суды от судов общей юрисдикции?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Арбитражные суды специализируются на экономических спорах между организациями и предпринимателями, делах о банкротстве 
                и корпоративных конфликтах. Суды общей юрисдикции рассматривают споры с участием граждан, уголовные и административные дела.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">Что такое судебная инстанция?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Судебная инстанция — это стадия рассмотрения дела. Первая инстанция рассматривает дело по существу, апелляция проверяет 
                законность решений, кассация — законность вступивших в силу судебных актов, надзор — исключительная проверка Верховным Судом.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="p-4 bg-secondary/20 rounded-full">
                <Icon name="Info" size={48} className="text-secondary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3 text-foreground">Принципы правосудия в РФ</h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Shield" size={18} className="text-secondary flex-shrink-0" />
                    <span>Независимость судей</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={18} className="text-secondary flex-shrink-0" />
                    <span>Гласность судопроизводства</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Scale" size={18} className="text-secondary flex-shrink-0" />
                    <span>Состязательность сторон</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="FileText" size={18} className="text-secondary flex-shrink-0" />
                    <span>Равенство перед законом</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2024 Информационный портал о судебной системе Российской Федерации
          </p>
          <p className="text-xs opacity-60 mt-2">
            Официальная информация о структуре и деятельности судебных органов России
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
