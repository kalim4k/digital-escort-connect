
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Phone, Star, Lock, Unlock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const GirlDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { girl } = location.state || {};
  
  const [progress, setProgress] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [revealedDigits, setRevealedDigits] = useState(4); // Always show first 4 digits
  const [canClick, setCanClick] = useState(true);
  const [dailyClicks, setDailyClicks] = useState(0);
  const [lastClickDate, setLastClickDate] = useState('');

  const adUrls = [
    "https://www.profitableratecpm.com/mubwkz26?key=0604219cd9f1025d2fde4e475f7f38ea",
    "https://www.profitableratecpm.com/t7bwwufze?key=a6ddcb1a7d4c7d75c656937f3e87c741",
    "https://www.profitableratecpm.com/t9jb9smf?key=40443693c17abb2135e9b6e3738db2dd",
    "https://www.profitableratecpm.com/jbk2360sj?key=7fc034a14e94a1e760dfc819dc5eb505",
    "https://www.profitableratecpm.com/a5g3pzk5?key=13957d2a449284399821dbab142c2ec6",
    "https://www.profitableratecpm.com/zd6q3225?key=c8d4677f36e39b6fab42a81040613a03",
    "https://www.profitableratecpm.com/u561dm0rb?key=8ffe49bb9342d0127cd4bf43681ac0b9",
    "https://www.profitableratecpm.com/jt5q78fu?key=a58f4867bee88a53189c4f17d4b1dfb8",
    "https://www.profitableratecpm.com/ak0s2iupss?key=98aad472f5da172c09580b4a6cbd0e42",
    "https://www.profitableratecpm.com/rsc7zk825d?key=edf05e922bd1026733b9de1b4068df54"
  ];

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem(`girl_${girl?.id}_progress`);
    const savedClicks = localStorage.getItem(`girl_${girl?.id}_clicks`);
    const savedRevealed = localStorage.getItem(`girl_${girl?.id}_revealed`);
    const savedDailyClicks = localStorage.getItem('daily_clicks');
    const savedDate = localStorage.getItem('last_click_date');
    
    const today = new Date().toDateString();
    
    if (savedDate !== today) {
      // Reset daily clicks for new day
      localStorage.setItem('daily_clicks', '0');
      localStorage.setItem('last_click_date', today);
      setDailyClicks(0);
      setLastClickDate(today);
    } else {
      setDailyClicks(parseInt(savedDailyClicks || '0'));
      setLastClickDate(savedDate || '');
    }
    
    if (savedProgress) setProgress(parseInt(savedProgress));
    if (savedClicks) setClickCount(parseInt(savedClicks));
    if (savedRevealed) setRevealedDigits(parseInt(savedRevealed));
  }, [girl?.id]);

  const displayPhone = (phone: string, revealedCount: number) => {
    if (!phone) return '';
    return phone.substring(0, revealedCount) + '●'.repeat(Math.max(0, phone.length - revealedCount));
  };

  const handleUnlockClick = () => {
    if (!canClick) {
      toast({
        title: "Limite atteinte",
        description: "Vous avez déjà débloqué 2 numéros aujourd'hui. Revenez demain !",
        variant: "destructive"
      });
      return;
    }

    if (dailyClicks >= 2) {
      toast({
        title: "Limite quotidienne",
        description: "Vous ne pouvez débloquer que 2 chiffres par jour maximum.",
        variant: "destructive"
      });
      return;
    }

    // Open ad in new tab
    const adUrl = adUrls[clickCount % adUrls.length];
    window.open(adUrl, '_blank');

    const newClickCount = clickCount + 1;
    const newProgress = (newClickCount / 10) * 100;

    setClickCount(newClickCount);
    setProgress(newProgress);

    // Save progress
    localStorage.setItem(`girl_${girl.id}_progress`, newProgress.toString());
    localStorage.setItem(`girl_${girl.id}_clicks`, newClickCount.toString());

    if (newClickCount >= 10) {
      // Unlock 2 more digits
      const newRevealed = Math.min(revealedDigits + 2, girl.phone.length);
      setRevealedDigits(newRevealed);
      localStorage.setItem(`girl_${girl.id}_revealed`, newRevealed.toString());
      
      // Update daily clicks
      const newDailyClicks = dailyClicks + 1;
      setDailyClicks(newDailyClicks);
      localStorage.setItem('daily_clicks', newDailyClicks.toString());
      localStorage.setItem('last_click_date', new Date().toDateString());
      
      // Reset for next unlock
      setClickCount(0);
      setProgress(0);
      localStorage.setItem(`girl_${girl.id}_progress`, '0');
      localStorage.setItem(`girl_${girl.id}_clicks`, '0');

      if (newRevealed >= girl.phone.length) {
        toast({
          title: "Numéro complètement débloqué !",
          description: `Vous pouvez maintenant contacter ${girl.name}`,
        });
      } else {
        toast({
          title: "2 chiffres débloqués !",
          description: "Les commandes sont surchargées. Revenez demain pour plus de chiffres.",
        });
      }

      if (newDailyClicks >= 2) {
        setCanClick(false);
      }
    } else {
      toast({
        title: "Publicité ouverte",
        description: `${10 - newClickCount} clics restants pour débloquer 2 chiffres`,
      });
    }
  };

  if (!girl) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center justify-center">
        <Card className="p-6">
          <p className="text-center">Profil non trouvé</p>
          <Button onClick={() => navigate('/')} className="mt-4 w-full">
            Retour à l'accueil
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Button>
          <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            {girl.name}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <div className="relative">
            <img 
              src={girl.image} 
              alt={girl.name}
              className="w-full h-80 object-cover"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-2 rounded-full flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-medium">{girl.rating}</span>
            </div>
          </div>
          
          <CardContent className="p-6 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-gray-800">{girl.name}</h2>
              <p className="text-gray-600">{girl.description}</p>
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 rounded-lg">
                <p className="text-green-800 font-semibold">{girl.price}</p>
              </div>
            </div>

            {/* Phone Number Display */}
            <div className="space-y-4">
              <div className="text-center">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Numéro de téléphone
                </label>
                <div className="bg-gray-100 p-4 rounded-xl flex items-center justify-center gap-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <span className="font-mono text-xl tracking-wider text-gray-800">
                    {displayPhone(girl.phone, revealedDigits)}
                  </span>
                  {revealedDigits < girl.phone.length ? (
                    <Lock className="w-5 h-5 text-red-500" />
                  ) : (
                    <Unlock className="w-5 h-5 text-green-500" />
                  )}
                </div>
              </div>

              {/* Progress Section */}
              {revealedDigits < girl.phone.length && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Progression pour débloquer 2 chiffres</span>
                      <span>{clickCount}/10 clics</span>
                    </div>
                    <Progress value={progress} className="h-3" />
                  </div>

                  <div className="text-center space-y-3">
                    <p className="text-sm text-gray-600">
                      Cliquez {10 - clickCount} fois de plus pour débloquer 2 chiffres
                    </p>
                    
                    <Button
                      onClick={handleUnlockClick}
                      disabled={!canClick || dailyClicks >= 2}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:transform-none"
                    >
                      {!canClick || dailyClicks >= 2 ? (
                        "Limite quotidienne atteinte"
                      ) : (
                        "DÉBLOQUER LE NUMÉRO"
                      )}
                    </Button>

                    <div className="bg-blue-100 p-3 rounded-lg">
                      <p className="text-blue-800 text-sm">
                        📅 Déblocages aujourd'hui: {dailyClicks}/2 filles
                      </p>
                      {dailyClicks >= 2 && (
                        <p className="text-blue-700 text-xs mt-1">
                          Revenez demain pour débloquer plus de numéros !
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {revealedDigits >= girl.phone.length && (
                <div className="text-center space-y-3">
                  <div className="bg-green-100 p-4 rounded-xl">
                    <p className="text-green-800 font-semibold">
                      🎉 Numéro complètement débloqué !
                    </p>
                    <p className="text-green-700 text-sm mt-1">
                      Vous pouvez maintenant contacter {girl.name}
                    </p>
                  </div>
                  
                  <Button
                    onClick={() => window.open(`tel:${girl.phone}`, '_self')}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105"
                  >
                    📞 APPELER MAINTENANT
                  </Button>
                </div>
              )}

              {revealedDigits < girl.phone.length && progress < 100 && (
                <div className="bg-yellow-100 p-4 rounded-xl">
                  <p className="text-yellow-800 text-sm text-center">
                    ⚠️ Les commandes de {girl.name} sont surchargées. 
                    Vous pourrez débloquer plus de chiffres demain !
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GirlDetail;
