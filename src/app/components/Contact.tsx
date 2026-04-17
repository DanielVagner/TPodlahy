import { Phone, Mail, MapPin, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Prosím, vyplňte všechna povinná pole správně.');
      return;
    }

    setFormStatus('submitting');
    setErrorMessage(null);

    const emailData = {
      name: formData.name,
      email: formData.email,
      subject: 'Nová zpráva z kontaktního formuláře - T-Podlahy',
      message: `Zpráva od: ${formData.name}\nEmail: ${formData.email}${formData.phone ? `\nTelefon: ${formData.phone}` : ''}\n\nZpráva:\n${formData.message}`,
    };

    try {
      const response = await fetch('https://tpodlahy.azurewebsites.net/api/email/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) throw new Error('Chyba při odesílání emailu');

      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (err) {
      console.error('Chyba:', err);
      setFormStatus('error');
      setErrorMessage('Chyba při odesílání e-mailu. Zkuste to prosím později nebo nás kontaktujte telefonicky.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage(null);
  };

  const inputClass = "w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-colors bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500";

  return (
    <section id="contact" className="py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-xl mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="block w-6 h-px bg-orange-600 dark:bg-orange-500" />
            <span className="text-orange-600 dark:text-orange-400 text-xs font-semibold tracking-widest uppercase">
              Kontakt
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight tracking-tight mb-4">
            Kontaktujte nás
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
            Máte zájem o naše služby? Neváhejte nás kontaktovat pro nezávaznou cenovou nabídku.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact info */}
          <div className="flex flex-col gap-6">
            {[
              { icon: Phone, label: 'Telefon', content: <a href="tel:+420604786107" className="text-zinc-600 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">+420 604 786 107</a> },
              { icon: Mail, label: 'Email', content: <a href="mailto:pttom@seznam.cz" className="text-zinc-600 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">pttom@seznam.cz</a> },
              { icon: MapPin, label: 'Adresa', content: <p className="text-zinc-600 dark:text-zinc-300">Jeřice 129<br />508 01 Jeřice</p> },
            ].map(({ icon: Icon, label, content }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="bg-orange-100 dark:bg-orange-900/30 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="size-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-white mb-1">{label}</h4>
                  {content}
                </div>
              </div>
            ))}

            <div className="mt-2 bg-white dark:bg-zinc-800 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-700/60">
              <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">Měření zdarma</h4>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                Nabízíme bezplatné zaměření a cenovou kalkulaci přímo u Vás doma. Stačí nás kontaktovat.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Jméno a příjmení *
                </label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Jan Novák" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Email *
                </label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="jan@email.cz" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Telefon
                </label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+420 604 786 107" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Zpráva *
                </label>
                <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Popište Váš projekt nebo dotaz..." />
              </div>

              {errorMessage && (
                <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400">
                  <AlertCircle className="size-5 flex-shrink-0" />
                  <span className="text-sm">{errorMessage}</span>
                </div>
              )}

              {formStatus === 'success' && (
                <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400">
                  <CheckCircle2 className="size-5 flex-shrink-0" />
                  <span className="text-sm">Děkujeme za Vaši zprávu! Brzy se Vám ozveme.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full bg-orange-600 hover:bg-orange-500 disabled:bg-zinc-400 disabled:cursor-not-allowed text-white py-3.5 rounded-lg transition-colors font-semibold flex items-center justify-center gap-2"
              >
                {formStatus === 'submitting' ? (
                  <><Loader2 className="size-5 animate-spin" /><span>Odesílám...</span></>
                ) : 'Odeslat zprávu'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
