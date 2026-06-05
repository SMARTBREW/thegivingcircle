import { useEffect, useState } from 'react';
import type { AnimalWelfarePartner, AnimalWelfarePartnerInput } from '../../types/animalWelfare';

const EMPTY: AnimalWelfarePartnerInput = {
  person: '',
  organisation: '',
  contact: '',
  city: '',
  area: '',
  address: '',
  email: '',
  services: '',
};

interface PartnerFormModalProps {
  open: boolean;
  title: string;
  defaultCity: string;
  initial?: AnimalWelfarePartner | null;
  saving: boolean;
  onClose: () => void;
  onSubmit: (input: AnimalWelfarePartnerInput) => Promise<void>;
}

const PartnerFormModal = ({
  open,
  title,
  defaultCity,
  initial,
  saving,
  onClose,
  onSubmit,
}: PartnerFormModalProps) => {
  const [form, setForm] = useState<AnimalWelfarePartnerInput>({ ...EMPTY, city: defaultCity });

  useEffect(() => {
    if (!open) return;
    if (initial) {
      setForm({
        person: initial.person,
        organisation: initial.organisation,
        contact: initial.contact,
        city: initial.city || defaultCity,
        area: initial.area,
        address: initial.address ?? '',
        email: initial.email ?? '',
        services: initial.services,
      });
    } else {
      setForm({ ...EMPTY, city: defaultCity });
    }
  }, [open, initial, defaultCity]);

  if (!open) return null;

  const handleChange = (field: keyof AnimalWelfarePartnerInput, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(form);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="aw-form-title">
      <button type="button" className="absolute inset-0 bg-black/50" aria-label="Close" onClick={onClose} />
      <form
        onSubmit={handleSubmit}
        className="relative bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 z-10"
      >
        <h2 id="aw-form-title" className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Your details will be emailed to our team for verification. We add verified entries to this directory after review.
        </p>
        <div className="space-y-4">
          <div>
            <label htmlFor="aw-person" className="block text-sm font-medium text-gray-700 mb-1">
              Concerned Person
            </label>
            <input
              id="aw-person"
              type="text"
              value={form.person}
              onChange={(e) => handleChange('person', e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>
          <div>
            <label htmlFor="aw-org" className="block text-sm font-medium text-gray-700 mb-1">
              Organisation/Individual Name
            </label>
            <input
              id="aw-org"
              type="text"
              value={form.organisation}
              onChange={(e) => handleChange('organisation', e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>
          <div>
            <label htmlFor="aw-contact" className="block text-sm font-medium text-gray-700 mb-1">
              Contact No.
            </label>
            <input
              id="aw-contact"
              type="text"
              value={form.contact}
              onChange={(e) => handleChange('contact', e.target.value)}
              placeholder="10-digit mobile; separate multiple with comma"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>
          <div>
            <label htmlFor="aw-city" className="block text-sm font-medium text-gray-700 mb-1">
              City of Operation
            </label>
            <input
              id="aw-city"
              type="text"
              required
              value={form.city}
              onChange={(e) => handleChange('city', e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>
          <div>
            <label htmlFor="aw-area" className="block text-sm font-medium text-gray-700 mb-1">
              Area of Operation
            </label>
            <input
              id="aw-area"
              type="text"
              value={form.area}
              onChange={(e) => handleChange('area', e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>
          <div>
            <label htmlFor="aw-address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              id="aw-address"
              rows={2}
              value={form.address}
              onChange={(e) => handleChange('address', e.target.value)}
              placeholder="Street address, landmark, pin code"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-600 outline-none resize-y"
            />
          </div>
          <div>
            <label htmlFor="aw-email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              id="aw-email"
              type="email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="contact@example.com"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-600 outline-none"
            />
          </div>
          <div>
            <label htmlFor="aw-services" className="block text-sm font-medium text-gray-700 mb-1">
              Services
            </label>
            <input
              id="aw-services"
              type="text"
              list="aw-services-suggestions"
              value={form.services}
              onChange={(e) => handleChange('services', e.target.value)}
              placeholder="e.g. Rescue, Vet on call, NGO, Ambulance"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-600 outline-none"
            />
            <datalist id="aw-services-suggestions">
              <option value="Rescue" />
              <option value="Veterinarian, Doctor, (Vet)" />
              <option value="Vet on call" />
              <option value="Vet, Hospital" />
              <option value="NGO" />
              <option value="Ambulance" />
            </datalist>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 text-sm font-semibold text-white bg-green-700 rounded-lg hover:bg-green-800 disabled:opacity-60"
          >
            {saving ? 'Submitting…' : 'Submit for review'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PartnerFormModal;
