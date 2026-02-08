import { Phone, Mail, MapPin, Clock, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validace
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
      message: `
Zpráva od: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Telefon: ${formData.phone}` : ''}

Zpráva:
${formData.message}
      `,
    };

    try {
      const response = await fetch('https://tpodlahy.azurewebsites.net/api/email/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        throw new Error('Chyba při odesílání emailu');
      }

      console.log('E-mail byl úspěšně odeslán.');
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message po 5 sekundách
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
      
    } catch (err) {
      console.error('Chyba:', err);
      setFormStatus('error');
      setErrorMessage('Chyba při odesílání e-mailu. Zkuste to prosím později nebo nás kontaktujte telefonicky.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    // Clear error message when user starts typing
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  return (
    <section id="contact" className="py-20 bg-amber-50 dark:bg-stone-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Kontaktujte nás
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Máte zájem o naše služby? Neváhejte nás kontaktovat pro nezávaznou cenovou nabídku
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Kontaktní informace</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="size-6 text-amber-700 dark:text-amber-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Telefon</h4>
                  <a href="tel:+420123456789" className="text-gray-600 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500">
                    +420 604 786 107
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="size-6 text-amber-700 dark:text-amber-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h4>
                  <a href="mailto:pttom@seznam.cz" className="text-gray-600 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500">
                    pttom@seznam.cz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="size-6 text-amber-700 dark:text-amber-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Adresa</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Jeřice 129<br />
                    508 01 Jeřice
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 dark:bg-amber-900/30 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="size-6 text-amber-700 dark:text-amber-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Pracovní doba</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Po - Pá: 7:00 - 17:00<br />
                    So: 8:00 - 12:00<br />
                    Ne: Zavřeno
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Provádíme měření zdarma!</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Nabízíme bezplatné zaměření a cenovou kalkulaci přímo u Vás doma. Stačí nás kontaktovat.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Napište nám</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Jméno a příjmení *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-colors bg-white dark:bg-stone-800 text-gray-900 dark:text-white"
                  placeholder="Jan Novák"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-colors bg-white dark:bg-stone-800 text-gray-900 dark:text-white"
                  placeholder="jan@email.cz"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-colors bg-white dark:bg-stone-800 text-gray-900 dark:text-white"
                  placeholder="+420 604 786 107"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Zpráva *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-colors resize-none bg-white dark:bg-stone-800 text-gray-900 dark:text-white"
                  placeholder="Popište Váš projekt nebo dotaz..."
                ></textarea>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400">
                  <AlertCircle className="size-5 flex-shrink-0" />
                  <span className="text-sm">{errorMessage}</span>
                </div>
              )}

              {/* Success Message */}
              {formStatus === 'success' && (
                <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400">
                  <CheckCircle2 className="size-5 flex-shrink-0" />
                  <span className="text-sm">Děkujeme za Vaši zprávu! Brzy se Vám ozveme.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full bg-amber-700 hover:bg-amber-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 rounded-lg transition-colors font-semibold flex items-center justify-center gap-2"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <Loader2 className="size-5 animate-spin" />
                    <span>Odesílám...</span>
                  </>
                ) : (
                  'Odeslat zprávu'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}