import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, User, ShoppingBag, Phone, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [activeTab, setActiveTab] = useState('accueil');
  const navigate = useNavigate();

  const girls = [
    {
      id: 1,
      name: "Sexy Aminata",
      description: "Gros seins - Expérience unique",
      image: "https://orawin.fun/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-a-14.45.20_5b341a5d.jpg",
      phone: "+22890123456",
      price: "2 coups à 5000 FCFA",
      rating: 4.8
    },
    {
      id: 2,
      name: "Chatte Mouillée Fatou",
      description: "Skinny - Toujours prête",
      image: "https://orawin.fun/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-a-14.44.37_77c0193e.jpg",
      phone: "+22891234567",
      price: "1 coup à 5000 FCFA",
      rating: 4.9
    },
    {
      id: 3,
      name: "Sexy Adjoa",
      description: "Courbes parfaites",
      image: "https://orawin.fun/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-a-14.43.49_276add8c.jpg",
      phone: "+22892345678",
      price: "Toute la nuit 15000 FCFA",
      rating: 4.7
    },
    {
      id: 4,
      name: "Belle Akosua",
      description: "Expérience divine",
      image: "https://orawin.fun/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-a-14.43.07_5bcdfefc.jpg",
      phone: "+22893456789",
      price: "2 coups à 7000 FCFA",
      rating: 4.6
    },
    {
      id: 5,
      name: "Charmante Esi",
      description: "Douce et sensuelle",
      image: "https://orawin.fun/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-a-14.42.22_27323ff5.jpg",
      phone: "+22894567890",
      price: "3 coups à 8000 FCFA",
      rating: 4.8
    },
    {
      id: 6,
      name: "Sexy Abena",
      description: "Passion intense",
      image: "https://orawin.fun/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-a-14.41.59_9a99870c.jpg",
      phone: "+22895678901",
      price: "1 coup à 6000 FCFA",
      rating: 4.5
    },
    {
      id: 7,
      name: "Divine Yawa",
      description: "Plaisir garanti",
      image: "https://orawin.fun/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-a-14.40.35_99462564.jpg",
      phone: "+22896789012",
      price: "2 coups à 6500 FCFA",
      rating: 4.9
    },
    {
      id: 8,
      name: "Sensuelle Efua",
      description: "Expérience inoubliable",
      image: "https://orawin.fun/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-a-14.40.16_5a9d10a1.jpg",
      phone: "+22897890123",
      price: "Toute la nuit 18000 FCFA",
      rating: 4.7
    },
    {
      id: 9,
      name: "Coquine Akua",
      description: "Très expérimentée",
      image: "https://orawin.fun/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-a-14.39.04_7580df8e.jpg",
      phone: "+22898901234",
      price: "2 coups à 5500 FCFA",
      rating: 4.6
    },
    {
      id: 10,
      name: "Sexy Adwoa",
      description: "Chaude et disponible",
      image: "https://orawin.fun/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-a-14.38.18_2a63f2da.jpg",
      phone: "+22899012345",
      price: "1 coup à 4500 FCFA",
      rating: 4.8
    },
    {
      id: 11,
      name: "Belle Araba",
      description: "Gros cul - Service premium",
      image: "https://orawin.fun/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-a-14.36.41_0a587926.jpg",
      phone: "+22890123457",
      price: "Toute la nuit 20000 FCFA",
      rating: 4.9
    },
    {
      id: 12,
      name: "Chatte Serrée Ama",
      description: "Jeune et fraîche",
      image: "https://orawin.fun/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-a-14.35.51_34599ac0.jpg",
      phone: "+22891234568",
      price: "2 coups à 6000 FCFA",
      rating: 4.7
    },
    {
      id: 13,
      name: "Sexy Naana",
      description: "Experte en plaisir",
      image: "https://orawin.fun/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-a-14.26.39_6f6a0104.jpg",
      phone: "+22892345679",
      price: "3 coups à 9000 FCFA",
      rating: 4.8
    },
    {
      id: 14,
      name: "Divine Kesi",
      description: "Corps de déesse",
      image: "https://orawin.fun/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-a-14.26.03_5d06fd9a.jpg",
      phone: "+22893456780",
      price: "1 coup à 5500 FCFA",
      rating: 4.6
    },
    {
      id: 15,
      name: "Charmante Aduke",
      description: "Skinny - Très chaude",
      image: "https://orawin.fun/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-a-14.25.29_be203af4.jpg",
      phone: "+22894567891",
      price: "2 coups à 5000 FCFA",
      rating: 4.9
    },
    {
      id: 16,
      name: "Sexy Ablavi",
      description: "Gros seins naturels",
      image: "https://orawin.fun/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-a-14.25.02_15683b0d.jpg",
      phone: "+22895678902",
      price: "Toute la nuit 16000 FCFA",
      rating: 4.7
    },
    {
      id: 17,
      name: "Belle Elikem",
      description: "Service VIP exclusif",
      image: "https://orawin.fun/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-a-14.24.26_4718a497.jpg",
      phone: "+22896789013",
      price: "3 coups à 10000 FCFA",
      rating: 4.8
    },
    {
      id: 18,
      name: "Coquine Dzidzor",
      description: "Expérience inoubliable",
      image: "https://orawin.fun/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-a-14.23.58_48fd80af.jpg",
      phone: "+22897890124",
      price: "2 coups à 7500 FCFA",
      rating: 4.6
    },
    {
      id: 19,
      name: "Sexy Mawusi",
      description: "Chatte toute mouillée",
      image: "https://orawin.fun/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-26-a-14.23.19_e002665a.jpg",
      phone: "+22898901235",
      price: "1 coup à 4000 FCFA",
      rating: 4.9
    }
  ];

  const blurPhone = (phone: string) => {
    return phone.substring(0, 4) + "●●●●●●●";
  };

  const handleViewNumber = (girl: any) => {
    navigate(`/girl/${girl.id}`, { state: { girl } });
  };

  const renderAccueil = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          CamFap
        </h1>
        <p className="text-gray-600">Découvrez nos beautés africaines</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {girls.map((girl) => (
          <Card key={girl.id} className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <div className="relative">
              <img 
                src={girl.image} 
                alt={girl.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-full flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{girl.rating}</span>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{girl.name}</h3>
                  <p className="text-sm text-gray-600">{girl.description}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="font-mono text-lg tracking-wider text-gray-700">
                      {blurPhone(girl.phone)}
                    </span>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-2 rounded-lg">
                    <p className="text-green-800 font-semibold text-center">{girl.price}</p>
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleViewNumber(girl)}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
                >
                  VOIR LE NUMÉRO
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderProfil = () => (
    <div className="max-w-md mx-auto space-y-6">
      <div className="text-center space-y-4">
        <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto flex items-center justify-center">
          <User className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Profil Utilisateur</h2>
      </div>
      
      <div className="space-y-4">
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom d'utilisateur</label>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-gray-800">Utilisateur Premium</p>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Statut</label>
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-3 rounded-lg">
                <p className="text-orange-800 font-semibold">Membre VIP</p>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Numéros débloqués aujourd'hui</label>
              <div className="bg-blue-100 p-3 rounded-lg">
                <p className="text-blue-800">0/2 filles</p>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <h3 className="font-semibold text-gray-800 mb-3">Paramètres</h3>
          <div className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              Notifications
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Confidentialité
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Support
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderBoutique = () => (
    <div className="text-center space-y-6">
      <div className="w-32 h-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mx-auto flex items-center justify-center">
        <ShoppingBag className="w-16 h-16 text-gray-500" />
      </div>
      
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">Boutique</h2>
        <p className="text-gray-600">Cette section est en cours de développement</p>
      </div>
      
      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl">
        <p className="text-blue-800">
          Bientôt disponible : crédits premium, accès VIP et fonctionnalités exclusives
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent text-center">
            CamFap
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {activeTab === 'accueil' && renderAccueil()}
        {activeTab === 'profil' && renderProfil()}
        {activeTab === 'boutique' && renderBoutique()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-around py-2">
            {[
              { id: 'accueil', label: 'Accueil', icon: Home },
              { id: 'profil', label: 'Profil', icon: User },
              { id: 'boutique', label: 'Boutique', icon: ShoppingBag }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex flex-col items-center py-2 px-4 rounded-lg transition-all duration-200 ${
                  activeTab === id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Icon className="w-6 h-6 mb-1" />
                <span className="text-xs font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom padding for fixed nav */}
      <div className="h-20"></div>
    </div>
  );
};

export default Index;
