import React, { useState } from 'react';
import { Shield, Terminal, Search, Wifi, Globe, Lock, FileText, Bot } from 'lucide-react';

interface ModuleResult {
  module: string;
  status: 'idle' | 'running' | 'success' | 'error';
  output: string;
  timestamp?: string;
}

function App() {
  const [target, setTarget] = useState('');
  const [results, setResults] = useState<ModuleResult[]>([]);
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const modules = [
    { id: 'osint', name: 'OSINT', icon: Search, description: 'Reconnaissance passive' },
    { id: 'scanner', name: 'Scanner', icon: Wifi, description: 'Scan de ports et services' },
    { id: 'web', name: 'Web Vulns', icon: Globe, description: 'Analyse vulnérabilités web' },
    { id: 'crypto', name: 'Crypto Tools', icon: Lock, description: 'Outils cryptographiques' },
    { id: 'report', name: 'Rapport', icon: FileText, description: 'Génération de rapport' },
    { id: 'telegram', name: 'Telegram Bot', icon: Bot, description: 'Interface Telegram' }
  ];

  const runModule = async (moduleId: string) => {
    if (!target && moduleId !== 'crypto' && moduleId !== 'report') {
      alert('Veuillez spécifier une cible');
      return;
    }

    setActiveModule(moduleId);
    const newResult: ModuleResult = {
      module: moduleId,
      status: 'running',
      output: 'Exécution en cours...',
      timestamp: new Date().toLocaleString()
    };

    setResults(prev => [...prev.filter(r => r.module !== moduleId), newResult]);

    // Simulation d'exécution
    setTimeout(() => {
      const simulatedOutput = getSimulatedOutput(moduleId, target);
      setResults(prev => prev.map(r => 
        r.module === moduleId 
          ? { ...r, status: 'success', output: simulatedOutput }
          : r
      ));
      setActiveModule(null);
    }, 2000 + Math.random() * 3000);
  };

  const getSimulatedOutput = (moduleId: string, target: string): string => {
    switch (moduleId) {
      case 'osint':
        return `[OSINT] Analyse de ${target}
═══════════════════════════════════════
📍 Géolocalisation IP: Paris, France
🏢 Organisation: OVH SAS
🌐 ASN: AS16276
📊 Réputation: Propre (0 rapports malveillants)
🔍 Domaines associés: 3 trouvés
📱 Technologies détectées: Apache, PHP, MySQL
⚠️  Ports exposés: 80, 443, 22
📧 Emails trouvés: 2 adresses
🔗 Réseaux sociaux: LinkedIn, Twitter
═══════════════════════════════════════`;

      case 'scanner':
        return `[SCANNER] Scan de ${target}
═══════════════════════════════════════
🎯 Cible: ${target}
⏱️  Temps de scan: 45.2s
📡 Ping: 23ms (100% réussite)
🖥️  OS détecté: Linux (TTL=64)

PORTS OUVERTS:
┌──────┬─────────┬──────────────────┐
│ Port │ Service │ Bannière         │
├──────┼─────────┼──────────────────┤
│ 22   │ SSH     │ OpenSSH 8.9      │
│ 80   │ HTTP    │ Apache/2.4.52    │
│ 443  │ HTTPS   │ Apache/2.4.52    │
│ 3306 │ MySQL   │ MySQL 8.0.28     │
└──────┴─────────┴──────────────────┘

🔍 DNS Reverse: ${target}
═══════════════════════════════════════`;

      case 'web':
        return `[WEB VULNS] Analyse de ${target}
═══════════════════════════════════════
🌐 URL testée: https://${target}
📄 Pages découvertes: 12
🔍 Formulaires trouvés: 3

VULNÉRABILITÉS DÉTECTÉES:
┌─────────────────┬──────────┬─────────┐
│ Type            │ Sévérité │ Status  │
├─────────────────┼──────────┼─────────┤
│ Headers manquants│ Medium   │ ⚠️      │
│ Cookies non sécurisés│ Low  │ ⚠️      │
│ Version exposée │ Low      │ ⚠️      │
│ HTTPS redirect  │ Info     │ ✅      │
└─────────────────┴──────────┴─────────┘

📋 Recommandations:
• Ajouter Content-Security-Policy
• Configurer Secure flag sur cookies
• Masquer version serveur
═══════════════════════════════════════`;

      case 'crypto':
        return `[CRYPTO TOOLS] Outils cryptographiques
═══════════════════════════════════════
🔐 Chiffrement Fernet: ✅ Disponible
📝 Base64 encode/decode: ✅ Disponible  
🔄 ROT13: ✅ Disponible
⚡ XOR cipher: ✅ Disponible
🖼️  Stéganographie: ✅ Disponible

EXEMPLE D'UTILISATION:
• Message: "Hello World"
• Base64: SGVsbG8gV29ybGQ=
• ROT13: Uryyb Jbeyq
• Fernet: gAAAAABh...encrypted...

🖼️  Image stéganographie prête
📁 Fichier: assets/image_stego.png
═══════════════════════════════════════`;

      case 'report':
        return `[RAPPORT] Génération du rapport final
═══════════════════════════════════════
📊 BLACKPYRECONX - RAPPORT D'ANALYSE
═══════════════════════════════════════
🎯 Cible: ${target || 'Non spécifiée'}
📅 Date: ${new Date().toLocaleDateString()}
⏰ Heure: ${new Date().toLocaleTimeString()}

📈 RÉSUMÉ EXÉCUTIF:
• Modules exécutés: ${results.filter(r => r.status === 'success').length}
• Vulnérabilités trouvées: 3 (Medium: 1, Low: 2)
• Recommandations: 3

📁 Fichiers générés:
• outputs/osint.txt
• outputs/scan_results.txt  
• outputs/web_vulns.txt
• outputs/rapport_final.txt

✅ Analyse terminée avec succès
═══════════════════════════════════════`;

      case 'telegram':
        return `[TELEGRAM BOT] Configuration du bot
═══════════════════════════════════════
🤖 Bot Status: ✅ Connecté
📱 Token: Configuré
🔔 Notifications: Activées

COMMANDES DISPONIBLES:
/osint <domain> - Lance reconnaissance
/scan <ip> - Scanner de ports
/web <url> - Analyse vulnérabilités
/crypto - Outils cryptographiques
/rapport - Génère rapport final
/help - Aide

📲 Bot prêt à recevoir des commandes
🔗 Lien: @BlackPyReconXBot
═══════════════════════════════════════`;

      default:
        return 'Module non reconnu';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="border-b border-gray-700 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-red-500" />
            <div>
              <h1 className="text-2xl font-bold text-white">BlackPyReconX</h1>
              <p className="text-gray-400 text-sm">Framework de Cybersécurité Éducatif</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Target Input */}
        <div className="mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              🎯 Cible (domaine ou IP)
            </label>
            <div className="flex space-x-4">
              <input
                type="text"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                placeholder="exemple.com ou 192.168.1.1"
                className="flex-1 bg-gray-900 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
              <button
                onClick={() => setTarget('')}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {modules.map((module) => {
            const Icon = module.icon;
            const result = results.find(r => r.module === module.id);
            const isActive = activeModule === module.id;
            
            return (
              <div
                key={module.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Icon className={`w-6 h-6 ${
                    result?.status === 'success' ? 'text-green-500' :
                    result?.status === 'error' ? 'text-red-500' :
                    isActive ? 'text-yellow-500' : 'text-gray-400'
                  }`} />
                  <h3 className="text-lg font-semibold">{module.name}</h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{module.description}</p>
                
                <button
                  onClick={() => runModule(module.id)}
                  disabled={isActive}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-yellow-600 cursor-not-allowed'
                      : result?.status === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-red-600 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/25'
                  }`}
                >
                  {isActive ? 'En cours...' : result?.status === 'success' ? 'Relancer' : 'Exécuter'}
                </button>
                
                {result?.status && (
                  <div className="mt-3 text-xs">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      result.status === 'success' ? 'bg-green-900 text-green-300' :
                      result.status === 'error' ? 'bg-red-900 text-red-300' :
                      result.status === 'running' ? 'bg-yellow-900 text-yellow-300' :
                      'bg-gray-900 text-gray-300'
                    }`}>
                      {result.status === 'success' ? '✅ Terminé' :
                       result.status === 'error' ? '❌ Erreur' :
                       result.status === 'running' ? '⏳ En cours' : '⏸️ En attente'}
                    </span>
                    {result.timestamp && (
                      <span className="ml-2 text-gray-500">{result.timestamp}</span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Results Terminal */}
        {results.length > 0 && (
          <div className="bg-black/80 backdrop-blur-sm rounded-lg border border-gray-700">
            <div className="flex items-center space-x-2 px-4 py-3 border-b border-gray-700">
              <Terminal className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-300">Terminal de Résultats</span>
              <div className="flex space-x-1 ml-auto">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            
            <div className="p-4 max-h-96 overflow-y-auto">
              {results.map((result, index) => (
                <div key={`${result.module}-${index}`} className="mb-4 last:mb-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-green-400 font-mono text-sm">root@blackpyreconx:~$</span>
                    <span className="text-gray-300 text-sm">python main.py --{result.module} {target}</span>
                  </div>
                  <pre className="text-green-300 font-mono text-xs whitespace-pre-wrap bg-gray-900/50 p-3 rounded border-l-2 border-green-500">
                    {result.output}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>BlackPyReconX v1.0 - Framework Éducatif de Cybersécurité</p>
          <p className="mt-1">⚠️ À utiliser uniquement sur vos propres systèmes ou avec autorisation explicite</p>
        </div>
      </div>
    </div>
  );
}

export default App;