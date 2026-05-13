import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../../components/Layout';
import EuropeMap from '../../../components/bac/EuropeMap';
import RomaniaMap from '../../../components/bac/RomaniaMap';
import VariantaRenderer from '../../../components/bac/VariantaRenderer';

import { varianta1 } from '../../../data/bac/varianta-1';
import { varianta2 } from '../../../data/bac/varianta-2';
import { varianta3 } from '../../../data/bac/varianta-3';
import { varianta4 } from '../../../data/bac/varianta-4';
import { varianta5 } from '../../../data/bac/varianta-5';
import { varianta6 } from '../../../data/bac/varianta-6';

const VARIANTE = {
  'varianta-1': varianta1,
  'varianta-2': varianta2,
  'varianta-3': varianta3,
  'varianta-4': varianta4,
  'varianta-5': varianta5,
  'varianta-6': varianta6,
};

export default function VariantaPage() {
  const router = useRouter();
  const { id } = router.query;
  
  if (!id) return <Layout><div style={{padding:'2rem', textAlign:'center'}}>Se încarcă...</div></Layout>;
  
  const varianta = VARIANTE[id];
  
  if (!varianta) {
    return (
      <Layout>
        <div style={{padding:'3rem', textAlign:'center'}}>
          <h1>Varianta nu există</h1>
          <p>Varianta solicitată nu a fost găsită.</p>
          <Link href="/bac" style={{color:'#0284c7', textDecoration:'underline'}}>← Înapoi la BAC</Link>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <VariantaRenderer varianta={varianta} EuropeMap={EuropeMap} RomaniaMap={RomaniaMap} />
    </Layout>
  );
}
