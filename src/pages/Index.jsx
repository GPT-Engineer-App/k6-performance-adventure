import { useState, useEffect } from 'react';
import { Paw, Heart, Info, Search, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const DogBreeds = () => {
  const breeds = ['Labrador Retriever', 'German Shepherd', 'Golden Retriever', 'French Bulldog', 'Bulldog', 'Poodle'];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {breeds.map((breed, index) => (
        <motion.div
          key={breed}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{breed}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={`https://source.unsplash.com/400x300/?${breed.toLowerCase().replace(' ', '-')}`} alt={breed} className="w-full h-48 object-cover rounded-md mb-4" />
              <p className="text-sm text-gray-600">A popular and beloved dog breed known for its friendly nature and versatility.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const FunFacts = () => {
  const facts = [
    "Dogs have a sense of smell that's up to 100,000 times stronger than humans.",
    "The Basenji is the only breed of dog that can't bark, but they can yodel!",
    "Dalmatians are born completely white and develop their spots as they grow older.",
    "A dog's nose print is unique, much like a human's fingerprint.",
    "The Greyhound is the fastest dog breed and can run up to 45 miles per hour."
  ];

  return (
    <ul className="space-y-4">
      {facts.map((fact, index) => (
        <motion.li
          key={index}
          className="bg-white p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex items-start">
            <Paw className="h-6 w-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
            <p>{fact}</p>
          </div>
        </motion.li>
      ))}
    </ul>
  );
};

const CareTips = () => {
  const tips = [
    { title: "Balanced Diet", content: "Provide a balanced diet appropriate for your dog's age, size, and activity level." },
    { title: "Regular Exercise", content: "Ensure your dog gets regular exercise through walks, playtime, and mental stimulation." },
    { title: "Veterinary Care", content: "Schedule regular check-ups with a veterinarian for vaccinations and health screenings." },
    { title: "Grooming", content: "Groom your dog regularly, including brushing their coat and teeth." },
    { title: "Socialization", content: "Socialize your dog from a young age to help them become well-adjusted adults." }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-center mb-6">Essential Dog Care Tips</h3>
      {tips.map((tip, index) => (
        <motion.div
          key={index}
          className="bg-white p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h4 className="text-lg font-semibold mb-2 text-blue-600">{tip.title}</h4>
          <p>{tip.content}</p>
        </motion.div>
      ))}
    </div>
  );
};

const Index = () => {
  const [activeTab, setActiveTab] = useState("breeds");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.title = "All About Dogs | Your Canine Companion Guide";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8">
      <div className="max-w-5xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center text-blue-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          All About Dogs
        </motion.h1>
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for dog breeds, facts, or care tips..."
              className="pl-10 pr-4 py-2 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="breeds"><Paw className="mr-2 h-4 w-4" /> Dog Breeds</TabsTrigger>
            <TabsTrigger value="facts"><Info className="mr-2 h-4 w-4" /> Fun Facts</TabsTrigger>
            <TabsTrigger value="care"><Heart className="mr-2 h-4 w-4" /> Care Tips</TabsTrigger>
          </TabsList>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TabsContent value="breeds">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Popular Dog Breeds</CardTitle>
                  <CardDescription>Explore some of the most beloved dog breeds.</CardDescription>
                </CardHeader>
                <CardContent>
                  <DogBreeds />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="facts">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Fun Dog Facts</CardTitle>
                  <CardDescription>Discover interesting facts about our canine companions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <FunFacts />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="care">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Dog Care Tips</CardTitle>
                  <CardDescription>Learn how to keep your furry friend happy and healthy.</CardDescription>
                </CardHeader>
                <CardContent>
                  <CareTips />
                </CardContent>
              </Card>
            </TabsContent>
          </motion.div>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
