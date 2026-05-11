import ExercitiuIdentificare from './ExercitiuIdentificare';
import ExercitiuCompletare from './ExercitiuCompletare';
import ExercitiuGrila from './ExercitiuGrila';
import ExercitiuComparatie from './ExercitiuComparatie';
import ExercitiuCauza from './ExercitiuCauza';
import ExercitiuCalcul from './ExercitiuCalcul';

const COMPONENTS = {
  identificare: ExercitiuIdentificare,
  completare: ExercitiuCompletare,
  grila: ExercitiuGrila,
  comparatie: ExercitiuComparatie,
  cauza: ExercitiuCauza,
  calcul: ExercitiuCalcul,
};

export default function VariantaRenderer({ exercitii, onRaspuns }) {
  return (
    <div>
      {exercitii.map(function(ex, idx) {
        const Component = COMPONENTS[ex.tip];
        if (!Component) return null;
        
        if (ex.tip === 'comparatie') {
          return (
            <Component
              key={idx}
              enunt={ex.enunt}
              raspunsExemplu={ex.raspunsExemplu}
              punctajMaxim={ex.punctajMaxim}
              onRaspuns={onRaspuns}
            />
          );
        }
        
        if (ex.tip === 'cauza') {
          return (
            <Component
              key={idx}
              enunt={ex.enunt}
              raspunsExemplu={ex.raspunsExemplu}
              cuvinteCheie={ex.cuvinteCheie}
              punctaj={ex.punctaj}
              onRaspuns={onRaspuns}
            />
          );
        }
        
        if (ex.tip === 'calcul') {
          return (
            <Component
              key={idx}
              enunt={ex.enunt}
              formula={ex.formula}
              raspunsCorect={ex.raspunsCorect}
              intervalAcceptat={ex.intervalAcceptat}
              unitate={ex.unitate}
              punctaj={ex.punctaj}
              onRaspuns={onRaspuns}
            />
          );
        }
        
        if (ex.tip === 'grila') {
          return (
            <Component
              key={idx}
              enunt={ex.enunt}
              variante={ex.variante}
              raspunsCorect={ex.raspunsCorect}
              punctaj={ex.punctaj}
              onRaspuns={onRaspuns}
            />
          );
        }
        
        if (ex.tip === 'completare') {
          return (
            <Component
              key={idx}
              enuntInainte={ex.enuntInainte}
              enuntDupa={ex.enuntDupa}
              raspunsCorect={ex.raspunsCorect}
              raspunsuriAcceptate={ex.raspunsuriAcceptate}
              punctaj={ex.punctaj}
              onRaspuns={onRaspuns}
            />
          );
        }
        
        return (
          <Component
            key={idx}
            enunt={ex.enunt}
            raspunsCorect={ex.raspunsCorect}
            raspunsuriAcceptate={ex.raspunsuriAcceptate}
            punctaj={ex.punctaj}
            onRaspuns={onRaspuns}
          />
        );
      })}
    </div>
  );
}
