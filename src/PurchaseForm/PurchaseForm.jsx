import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router";

export default function PurchaseForm() {
  return (
    <section className="bg-app-bg text-app-text py-2 px-4 transition-colors duration-500">
      <div className="max-w-2xl mx-auto bg-app-card rounded-3xl shadow-2xl p-8 border border-app-border relative z-60">
        {/* # HEADER DU FORMULAIRE */}
        <div className="text-center mb-3">
          <h2 className="text-4xl font-bold bg-linear-to-r from-app-accent to-pink-500 bg-clip-text text-transparent mb-2">
            Finaliser Votre commande
          </h2>
          <p className="opacity-70 italic text-lg">
            Veuillez remplir ce formulaire pour continuer votre achat.
          </p>
        </div>
        {/* # HEADER DU FORMULAIRE */}

        <form className="space-y-3">
          {/* # Section identite */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2 ml-1">
                Votre Nom
              </label>
              <input
                type="text"
                placeholder="Ex: MANGWA"
                className="w-full p-4 rounded-2xl bg-app-input border border-app-border focus:ring-2 focus:ring-app-accent outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 ml-1">
                Votre Prenom
              </label>
              <input
                type="text"
                placeholder="Ex: Boris"
                className="w-full p-4 rounded-2xl bg-app-input border border-app-border focus:ring-2 focus:ring-app-accent outline-none transition-all"
              />
            </div>
          </div>
          {/* # Section identite */}
          {/* # Section Contact */}
          <div>
            <label className="block text-sm font-semibold mb-2 ml-1">
              Votre Email
            </label>
            <input
              type="text"
              placeholder="exemple@email.com"
              className="w-full p-4 rounded-2xl bg-app-input border border-app-border focus:ring-2 focus:ring-app-accent outline-none transition-all"
            />
          </div>
          {/* # Section Contact */}
          {/* # Section Adresse */}
          <div className="space-y-4 bg-black/5 dark:bg-white/5 p-6 rounded-2xl">
            <h3 className="font-bold text-app-accent uppercase tracking-wider text-xs">
              Adresse de livraison
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Pays"
                className="p-3 rounded-xl bg-app-input border border-app-border outline-none focus:ring-1 focus:ring-app-accent"
              />
              <input
                type="text"
                placeholder="Ville"
                className="p-3 rounded-xl bg-app-input border border-app-border outline-none focus:ring-1 focus:ring-app-accent"
              />
              <input
                type="text"
                placeholder="Quartier"
                className="p-3 rounded-xl bg-app-input border border-app-border outline-none focus:ring-1 focus:ring-app-accent"
              />
            </div>
          </div>
          {/* # Section Adresse */}
          {/* # Section paiement */}
          <div className="pt-4">
            <label className="block text-sm font-semibold mb-4 text-center">
              Methode de paiement
            </label>
            <div className="flex flex-wrap justify-center gap-6">
              <label className="cursor-pointer group flex flex-col items-center">
                <input type="radio" name="pay" className="hidden peer" />
                <div
                  className="w-20 h-20 rounded-2xl bg-app-inputborder-2 border-transparent peer-checked:border-app-accent
                            peer-checked:bg-app-accent/10 flex items-center justify-center transition-all shadow-sm"
                >
                  <span className="text-xs font-bold">MTN</span>
                </div>
                <span className="text-[10px] mt-2 group-hover:text-app-accent transition-colors">
                  MoMo
                </span>
              </label>
              <label className="cursor-pointer group flex flex-col items-center">
                <input type="radio" name="pay" className="hidden peer" />
                <div
                  className="w-20 h-20 rounded-2xl bg-app-inputborder-2 border-transparent peer-checked:border-app-accent
                            peer-checked:bg-app-accent/10 flex items-center justify-center transition-all shadow-sm"
                >
                  <span className="text-xs font-bold">Orange</span>
                </div>
                <span className="text-[10px] mt-2 group-hover:text-app-accent transition-colors">
                  Money
                </span>
              </label>
              <label className="cursor-pointer group flex flex-col items-center">
                <input type="radio" name="pay" className="hidden peer" />
                <div
                  className="w-20 h-20 rounded-2xl bg-app-inputborder-2 border-transparent peer-checked:border-app-accent
                            peer-checked:bg-app-accent/10 flex items-center justify-center transition-all shadow-sm"
                >
                  <span className="text-xs font-bold">Methods</span>
                </div>
                <span className="text-[10px] mt-2 group-hover:text-app-accent transition-colors">
                  Others
                </span>
              </label>
            </div>
          </div>
          {/* # Section paiement */}
          {/* # Section Validation */}
          <div className="pt-8">
            <button className="w-full bg-app-accent hover:bg-app-accent-hover text-white font-bold py-5 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest">
              Commander mes delices
            </button>
          </div>
        </form>
        <Link to="/Sale">
          <BiLeftArrowAlt className="absolute top-5 left-5 text-3xl text-app-text" />
        </Link>
      </div>
    </section>
  );
}
