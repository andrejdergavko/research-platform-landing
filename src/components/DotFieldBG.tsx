import DotField from './DotField';

const DotFieldBG = ({
  children,
  ...props
}: { children: React.ReactNode } & React.ComponentProps<typeof DotField>) => {
  return (
    <div className="relative">
      {children}

      <div className="w-full h-full absolute top-0 left-0 -z-10">
        <DotField
          dotRadius={2}
          dotSpacing={20}
          cursorRadius={100}
          cursorForce={0.1}
          bulgeOnly={false}
          bulgeStrength={63}
          glowRadius={0}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="#FFFFFF"
          gradientTo="#606060"
          {...props}
        />
      </div>
    </div>
  );
};

export default DotFieldBG;
