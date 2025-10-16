export type Organization = {
    id: string;
    name: string;
    country: string;
    address: string;
    contact_admin: {
        name: string;
        email: string;
        phone: string;
    };
    contact_tech: {
        name: string;
        email: string;
        phone: string;
    };
    asn: number[];
    ipv4_ranges: string[]; // Ejemplo: ["200.1.1.0/24"]
    ipv6_ranges: string[]; // Ejemplo: ["2801:0:0:0::/48"]
    reverse_dns: string[];
    status: 'active' | 'suspended' | 'closed';
    member_since: Date;
    notes?: string;
    // ROAs existentes declarados por la organización
    roas: Array<{
        prefix: string; // Ej: "200.1.1.0/24"
        asn: number;
        created_at: Date;
        status: 'valid' | 'expired' | 'revoked';
    }>;
    // Anuncios BGP observados para los recursos de la organización
    bgp_announcements: Array<{
        prefix: string;
        asn: number;
        observed_at: Date;
        source: string; // Ej: "RIPE RIS", "RouteViews"
    }>;
    // Historial de sugerencias de ROA generadas por el sistema
    suggestion_log: Array<{
        date: Date;
        suggestion: string;
        implemented: boolean;
    }>;
    // Estado general de cobertura RPKI
    rpki_status: 'complete' | 'incomplete' | 'partial';
    rpki_last_checked: Date;
    created_at: Date;
    updated_at: Date;
}

// Mock de 30 organizaciones simuladas de la región LACNIC
export const organizationsMockData: Organization[] = [
    {
        id: 'org-001',
        name: 'Telecom Argentina S.A.',
        country: 'Argentina',
        address: 'Arenales 1925, Buenos Aires',
        contact_admin: {
            name: 'María González',
            email: 'admin@telecom.com.ar',
            phone: '+54 11 4000-0000',
        },
        contact_tech: {
            name: 'Juan Pérez',
            email: 'tech@telecom.com.ar',
            phone: '+54 11 4000-0001',
        },
        asn: [65001],
        ipv4_ranges: ['200.1.1.0/24'],
        ipv6_ranges: ['2801:0:100::/48'],
        reverse_dns: ['1.1.200.in-addr.arpa'],
        status: 'active',
        member_since: new Date('2003-05-10'),
        notes: 'Operador nacional de telecomunicaciones.',
        roas: [
            { prefix: '200.1.1.0/24', asn: 65001, created_at: new Date('2022-01-01'), status: 'valid' },
        ],
        bgp_announcements: [
            { prefix: '200.1.1.0/24', asn: 65001, observed_at: new Date('2025-10-10'), source: 'RIPE RIS' },
        ],
        suggestion_log: [
            { date: new Date('2025-10-12'), suggestion: 'Agregar ROA para 2801:0:100::/48', implemented: false },
        ],
        rpki_status: 'partial',
        rpki_last_checked: new Date('2025-10-14'),
        created_at: new Date('2003-05-10'),
        updated_at: new Date('2025-10-14'),
    },
    {
        id: 'org-002',
        name: 'Oi S.A.',
        country: 'Brasil',
        address: 'Rua do Lavradio 71, Rio de Janeiro',
        contact_admin: {
            name: 'Carlos Silva',
            email: 'admin@oi.com.br',
            phone: '+55 21 3131-3131',
        },
        contact_tech: {
            name: 'Fernanda Souza',
            email: 'tech@oi.com.br',
            phone: '+55 21 3131-3132',
        },
        asn: [65002, 65003],
        ipv4_ranges: ['201.7.0.0/16', '201.8.0.0/16'],
        ipv6_ranges: ['2804:14c::/32'],
        reverse_dns: ['0.7.201.in-addr.arpa', '0.8.201.in-addr.arpa'],
        status: 'active',
        member_since: new Date('2004-03-15'),
        roas: [
            { prefix: '201.7.0.0/16', asn: 65002, created_at: new Date('2023-02-10'), status: 'valid' },
            { prefix: '201.8.0.0/16', asn: 65003, created_at: new Date('2023-02-11'), status: 'valid' },
        ],
        bgp_announcements: [
            { prefix: '201.7.0.0/16', asn: 65002, observed_at: new Date('2025-10-13'), source: 'RouteViews' },
            { prefix: '201.8.0.0/16', asn: 65003, observed_at: new Date('2025-10-13'), source: 'RIPE RIS' },
        ],
        suggestion_log: [
            { date: new Date('2025-10-14'), suggestion: 'Revisar ROA para 2804:14c::/32', implemented: false },
        ],
        rpki_status: 'partial',
        rpki_last_checked: new Date('2025-10-14'),
        created_at: new Date('2004-03-15'),
        updated_at: new Date('2025-10-14'),
    },
    {
        id: 'org-003',
        name: 'Antel',
        country: 'Uruguay',
        address: 'Guatemala 1075, Montevideo',
        contact_admin: { name: 'Lucía Fernández', email: 'admin@antel.com.uy', phone: '+598 2928 8888' },
        contact_tech: { name: 'Diego López', email: 'tech@antel.com.uy', phone: '+598 2928 8889' },
        asn: [65004],
        ipv4_ranges: ['200.40.0.0/16'],
        ipv6_ranges: ['2800:810::/32'],
        reverse_dns: ['0.40.200.in-addr.arpa'],
        status: 'active',
        member_since: new Date('2002-11-01'),
        roas: [ { prefix: '200.40.0.0/16', asn: 65004, created_at: new Date('2021-06-01'), status: 'valid' } ],
        bgp_announcements: [ { prefix: '200.40.0.0/16', asn: 65004, observed_at: new Date('2025-10-13'), source: 'RIPE RIS' } ],
        suggestion_log: [ { date: new Date('2025-10-14'), suggestion: 'Agregar ROA para 2800:810::/32', implemented: false } ],
        rpki_status: 'partial',
        rpki_last_checked: new Date('2025-10-14'),
        created_at: new Date('2002-11-01'),
        updated_at: new Date('2025-10-14'),
    },
    {
        id: 'org-004',
        name: 'CNT EP',
        country: 'Ecuador',
        address: 'Av. 10 de Agosto N39-188, Quito',
        contact_admin: { name: 'Gabriela Torres', email: 'admin@cnt.gob.ec', phone: '+593 2 3964900' },
        contact_tech: { name: 'Jorge Castillo', email: 'tech@cnt.gob.ec', phone: '+593 2 3964901' },
        asn: [65005],
        ipv4_ranges: ['186.46.0.0/15'],
        ipv6_ranges: ['2800:1a0::/32'],
        reverse_dns: ['46.186.in-addr.arpa'],
        status: 'active',
        member_since: new Date('2008-07-20'),
        roas: [ { prefix: '186.46.0.0/15', asn: 65005, created_at: new Date('2022-03-15'), status: 'valid' } ],
        bgp_announcements: [ { prefix: '186.46.0.0/15', asn: 65005, observed_at: new Date('2025-10-13'), source: 'RouteViews' } ],
        suggestion_log: [ { date: new Date('2025-10-14'), suggestion: 'Verificar ROA para 2800:1a0::/32', implemented: false } ],
        rpki_status: 'partial',
        rpki_last_checked: new Date('2025-10-14'),
        created_at: new Date('2008-07-20'),
        updated_at: new Date('2025-10-14'),
    },
    {
        id: 'org-005',
        name: 'Claro Chile',
        country: 'Chile',
        address: 'Av. El Bosque Norte 90, Santiago',
        contact_admin: { name: 'Patricio Rojas', email: 'admin@claro.cl', phone: '+56 2 2580 0000' },
        contact_tech: { name: 'Valentina Soto', email: 'tech@claro.cl', phone: '+56 2 2580 0001' },
        asn: [65006],
        ipv4_ranges: ['190.196.0.0/15'],
        ipv6_ranges: ['2800:300::/32'],
        reverse_dns: ['196.190.in-addr.arpa'],
        status: 'active',
        member_since: new Date('2005-09-10'),
        roas: [ { prefix: '190.196.0.0/15', asn: 65006, created_at: new Date('2023-01-10'), status: 'valid' } ],
        bgp_announcements: [ { prefix: '190.196.0.0/15', asn: 65006, observed_at: new Date('2025-10-13'), source: 'RIPE RIS' } ],
        suggestion_log: [ { date: new Date('2025-10-14'), suggestion: 'Agregar ROA para 2800:300::/32', implemented: false } ],
        rpki_status: 'partial',
        rpki_last_checked: new Date('2025-10-14'),
        created_at: new Date('2005-09-10'),
        updated_at: new Date('2025-10-14'),
    },
    {
        id: 'org-006',
        name: 'Movistar Colombia',
        country: 'Colombia',
        address: 'Cra. 68A #24B-10, Bogotá',
        contact_admin: { name: 'Andrés Ramírez', email: 'admin@movistar.com.co', phone: '+57 1 7050000' },
        contact_tech: { name: 'Laura Gómez', email: 'tech@movistar.com.co', phone: '+57 1 7050001' },
        asn: [65007],
        ipv4_ranges: ['181.49.0.0/16'],
        ipv6_ranges: ['2800:4b0::/32'],
        reverse_dns: ['49.181.in-addr.arpa'],
        status: 'active',
        member_since: new Date('2006-04-18'),
        roas: [ { prefix: '181.49.0.0/16', asn: 65007, created_at: new Date('2022-11-20'), status: 'valid' } ],
        bgp_announcements: [ { prefix: '181.49.0.0/16', asn: 65007, observed_at: new Date('2025-10-13'), source: 'RouteViews' } ],
        suggestion_log: [ { date: new Date('2025-10-14'), suggestion: 'Agregar ROA para 2800:4b0::/32', implemented: false } ],
        rpki_status: 'partial',
        rpki_last_checked: new Date('2025-10-14'),
        created_at: new Date('2006-04-18'),
        updated_at: new Date('2025-10-14'),
    },
    {
        id: 'org-007',
        name: 'CANTV',
        country: 'Venezuela',
        address: 'Av. Libertador, Caracas',
        contact_admin: { name: 'Rafael Méndez', email: 'admin@cantv.com.ve', phone: '+58 212 5000000' },
        contact_tech: { name: 'Ana Torres', email: 'tech@cantv.com.ve', phone: '+58 212 5000001' },
        asn: [65008],
        ipv4_ranges: ['200.11.192.0/18'],
        ipv6_ranges: ['2800:200::/32'],
        reverse_dns: ['192.11.200.in-addr.arpa'],
        status: 'active',
        member_since: new Date('2007-02-12'),
        roas: [ { prefix: '200.11.192.0/18', asn: 65008, created_at: new Date('2023-03-01'), status: 'valid' } ],
        bgp_announcements: [ { prefix: '200.11.192.0/18', asn: 65008, observed_at: new Date('2025-10-13'), source: 'RIPE RIS' } ],
        suggestion_log: [ { date: new Date('2025-10-14'), suggestion: 'Agregar ROA para 2800:200::/32', implemented: false } ],
        rpki_status: 'partial',
        rpki_last_checked: new Date('2025-10-14'),
        created_at: new Date('2007-02-12'),
        updated_at: new Date('2025-10-14'),
    },
    // ... 23 organizaciones simuladas adicionales ...
];
