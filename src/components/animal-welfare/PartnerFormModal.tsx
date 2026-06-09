import { useEffect, useState } from 'react';
import type { AnimalWelfarePartner, AnimalWelfarePartnerInput } from '../../types/animalWelfare';
import { validatePhoneNumber } from '../../utils/api';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[a-zA-Z][a-zA-Z\s.'-]*$/;

type FieldErrors = Partial<Record<'person' | 'contact' | 'email', string>>;

function validatePersonName(person: string): string | null {
  const trimmed = person.trim();
  if (!trimmed) return 'Name is required';
  if (trimmed.length < 2) return 'Name must be at least 2 characters';
  if (!NAME_REGEX.test(trimmed)) return 'Name can only contain letters, spaces, and . \' -';
  return null;
}

function validateContactNumbers(contact: string): string | null {
  const trimmed = contact.trim();
  if (!trimmed) return 'Mobile number is required';
  const numbers = trimmed.split(',').map((n) => n.trim().replace(/\s/g, '')).filter(Boolean);
  if (numbers.length === 0) return 'Mobile number is required';
  for (const num of numbers) {
    if (!validatePhoneNumber(num)) {
      return 'Enter valid 10-digit mobile number(s) starting with 6–9; separate multiple with comma';
    }
  }
  return null;
}

function validateEmailAddress(email: string): string | null {
  const trimmed = email.trim();
  if (!trimmed) return 'Email is required';
  if (!EMAIL_REGEX.test(trimmed)) return 'Enter a valid email address';
  return null;
}

function validateForm(form: AnimalWelfarePartnerInput): FieldErrors {
  const errors: FieldErrors = {};
  const personError = validatePersonName(form.person);
  const contactError = validateContactNumbers(form.contact);
  const emailError = validateEmailAddress(form.email);
  if (personError) errors.person = personError;
  if (contactError) errors.contact = contactError;
  if (emailError) errors.email = emailError;
  return errors;
}

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
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  useEffect(() => {
    if (!open) return;
    setFieldErrors({});
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
    if (field === 'person' || field === 'contact' || field === 'email') {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const inputClass = (field?: keyof FieldErrors) =>
    `w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-green-600 outline-none ${
      field && fieldErrors[field] ? 'border-red-400 focus:ring-red-500' : 'border-gray-200'
    }`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm(form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    await onSubmit({
      ...form,
      person: form.person.trim(),
      contact: form.contact.trim(),
      email: form.email.trim(),
    });
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
              Concerned Person <span className="text-red-600">*</span>
            </label>
            <input
              id="aw-person"
              type="text"
              required
              autoComplete="name"
              value={form.person}
              onChange={(e) => handleChange('person', e.target.value)}
              className={inputClass('person')}
              aria-invalid={!!fieldErrors.person}
              aria-describedby={fieldErrors.person ? 'aw-person-error' : undefined}
            />
            {fieldErrors.person && (
              <p id="aw-person-error" className="mt-1 text-xs text-red-600">
                {fieldErrors.person}
              </p>
            )}
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
              Contact No. <span className="text-red-600">*</span>
            </label>
            <input
              id="aw-contact"
              type="tel"
              required
              inputMode="numeric"
              autoComplete="tel"
              value={form.contact}
              onChange={(e) => handleChange('contact', e.target.value)}
              placeholder="10-digit mobile; separate multiple with comma"
              className={inputClass('contact')}
              aria-invalid={!!fieldErrors.contact}
              aria-describedby={fieldErrors.contact ? 'aw-contact-error' : undefined}
            />
            {fieldErrors.contact && (
              <p id="aw-contact-error" className="mt-1 text-xs text-red-600">
                {fieldErrors.contact}
              </p>
            )}
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
              Email <span className="text-red-600">*</span>
            </label>
            <input
              id="aw-email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="contact@example.com"
              className={inputClass('email')}
              aria-invalid={!!fieldErrors.email}
              aria-describedby={fieldErrors.email ? 'aw-email-error' : undefined}
            />
            {fieldErrors.email && (
              <p id="aw-email-error" className="mt-1 text-xs text-red-600">
                {fieldErrors.email}
              </p>
            )}
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
