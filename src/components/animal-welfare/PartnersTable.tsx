import type { AnimalWelfarePartner } from '../../types/animalWelfare';

function formatContactLinks(contact: string) {
  if (!contact.trim()) return <span className="text-gray-400">—</span>;
  const parts = contact.split(/[,;]/).map((s) => s.trim()).filter(Boolean);
  return (
    <span className="inline-flex flex-row flex-wrap items-center gap-x-2 gap-y-1">
      {parts.map((part, i) => {
        const digits = part.replace(/\D/g, '');
        const isMobile = digits.length === 10 || (digits.length > 10 && digits.startsWith('91'));
        const tel = digits.length >= 10 && isMobile ? digits.slice(-10) : '';
        const node =
          tel.length === 10 ? (
            <a
              href={`tel:+91${tel}`}
              className="whitespace-nowrap text-green-800 font-medium hover:text-green-900 hover:underline"
            >
              +91&nbsp;{tel}
            </a>
          ) : (
            <span className="whitespace-nowrap text-gray-800">{part}</span>
          );
        return (
          <span key={`${part}-${i}`} className="whitespace-nowrap">
            {i > 0 && <span className="text-gray-300 mr-2">,</span>}
            {node}
          </span>
        );
      })}
    </span>
  );
}

function OrgOrPerson({ person, organisation }: { person: string; organisation: string }) {
  if (organisation.trim() && person.trim()) {
    return (
      <div className="space-y-0.5">
        <span className="block font-medium text-gray-900">{organisation}</span>
        <span className="block text-gray-600 text-xs">{person}</span>
      </div>
    );
  }
  const primary = organisation.trim() || person.trim();
  if (!primary) return <span className="text-gray-400">—</span>;
  return <span className="text-gray-900 font-medium">{primary}</span>;
}

function CellText({ value, maxWidth = 'max-w-[200px]' }: { value: string; maxWidth?: string }) {
  if (!value.trim()) return <span className="text-gray-400">—</span>;
  return <span className={`block ${maxWidth} text-gray-800 leading-relaxed`}>{value}</span>;
}

function EmailLink({ email }: { email: string }) {
  if (!email.trim()) return <span className="text-gray-400">—</span>;
  return (
    <a
      href={`mailto:${email.trim()}`}
      className="text-green-800 font-medium hover:text-green-900 hover:underline break-all"
    >
      {email.trim()}
    </a>
  );
}

function ServiceBadge({ label }: { label: string }) {
  if (!label.trim()) return <span className="text-gray-400">—</span>;
  return (
    <span className="inline-block max-w-[220px] rounded-md bg-white/80 border border-green-200/80 px-2 py-0.5 text-xs font-medium text-green-900 leading-snug">
      {label}
    </span>
  );
}

interface PartnersTableProps {
  partners: AnimalWelfarePartner[];
  serialOffset: number;
}

const PartnersTable = ({ partners, serialOffset }: PartnersTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1200px] text-sm border-collapse">
        <thead>
          <tr className="bg-[#1e2a5a] text-[#fef9c3]">
            <th className="px-4 py-3.5 text-left text-xs font-semibold uppercase tracking-wide w-14">S. No.</th>
            <th className="px-4 py-3.5 text-left text-xs font-semibold uppercase tracking-wide min-w-[200px]">
              Organisation / Person
            </th>
            <th className="px-4 py-3.5 text-left text-xs font-semibold uppercase tracking-wide min-w-[11rem] whitespace-nowrap">
              Contact
            </th>
            <th className="px-4 py-3.5 text-left text-xs font-semibold uppercase tracking-wide w-24">City</th>
            <th className="px-4 py-3.5 text-left text-xs font-semibold uppercase tracking-wide min-w-[120px]">
              Area
            </th>
            <th className="px-4 py-3.5 text-left text-xs font-semibold uppercase tracking-wide min-w-[160px]">
              Address
            </th>
            <th className="px-4 py-3.5 text-left text-xs font-semibold uppercase tracking-wide min-w-[150px]">
              Email
            </th>
            <th className="px-4 py-3.5 text-left text-xs font-semibold uppercase tracking-wide min-w-[140px]">
              Services
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200/80">
          {partners.map((row, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <tr
                key={row.id}
                className={`group transition-colors ${
                  isEven ? 'bg-[#ecfdf5]' : 'bg-[#f0fdf4]/60'
                } hover:bg-green-100/70`}
              >
                <td className="px-4 py-3.5 text-gray-600 font-medium tabular-nums">{serialOffset + idx + 1}</td>
                <td className="px-4 py-3.5">
                  <OrgOrPerson person={row.person} organisation={row.organisation} />
                </td>
                <td className="px-4 py-3.5 min-w-[11rem] whitespace-nowrap">{formatContactLinks(row.contact)}</td>
                <td className="px-4 py-3.5 text-gray-700">{row.city || '—'}</td>
                <td className="px-4 py-3.5 text-gray-700">
                  <CellText value={row.area} maxWidth="max-w-[140px]" />
                </td>
                <td className="px-4 py-3.5">
                  <CellText value={row.address ?? ''} maxWidth="max-w-[200px]" />
                </td>
                <td className="px-4 py-3.5">
                  <EmailLink email={row.email ?? ''} />
                </td>
                <td className="px-4 py-3.5">
                  <ServiceBadge label={row.services} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PartnersTable;
