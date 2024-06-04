import { skeleton } from '../../utils';

const SkillCard = ({
  loading,
}: {
  loading: boolean;
  skills: string[];
}) => {

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-32', heightCls: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">À propos de moi</span>
            )}
          </h5>
        </div>
        <div className="p-3 flow-root">
          <div className="-m-1 flex flex-wrap opacity-50" style={{ textAlign: 'justify' }}>
            Actuellement en Master 2 MIAGE, je suis un développeur passionné par les technologies numériques et l'innovation. J'ai une solide expérience en JavaScript, TypeScript, Node.js, et React.js, ainsi qu'une bonne connaissance des pratiques DevOps et Agile. Motivé par les défis techniques, je suis prêt à contribuer au développement de projets innovants et à apporter des solutions techniques de qualité.
          </div>
          <br/>
          <div className="-m-1 flex flex-wrap opacity-50" style={{ textAlign: 'justify' }}>
            Mon bon niveau d'anglais et mon excellent relationnel me permettent de m'intégrer facilement dans une équipe dynamique et de collaborer efficacement.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
