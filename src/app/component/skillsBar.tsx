// components/Skills.tsx
'use client'
// components/Skills.tsx
'use client'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  { category: 'Programming Skills', skills: [
    { name: 'HTML', level: 94 },
    { name: 'CSS', level: 83 },
    { name: 'JavaScript', level: 88 },
    { name: 'Next.js', level: 75 },
  ]},
  { category: 'Designing Skills', skills: [
    { name: 'Photoshop', level: 82 },
    { name: 'Illustrator', level: 74 },
    { name: 'Figma', level: 63 },
    { name: 'Responsive Design', level: 91 },
  ]}
];

const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const SkillCategory = styled.div`
  width: 45%;
`;

const SkillBarContainer = styled.div`
  position: relative;
  margin: 10px 0;
`;

const SkillBar = styled(motion.div)`
  background: #e0e0e0;
  border-radius: 10px;
  position: relative;
  height: 10px;
`;

const SkillLevel = styled(motion.div)`
  background: #ff4757;
  height: 100%;
  border-radius: 10px 10px 10px 10px;
  position: absolute;
  top: 0;
  left: 0;
`;

const PercentageLabel = styled.div`
  position: absolute;
  top: -25px;
  left: calc(100% - 40px);
  font-size: 14px;
  font-weight: bold;
`;

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <SkillsContainer ref={ref}>
      {skillsData.map((category, index) => (
        <SkillCategory key={index}>
          <h3>{category.category}</h3>
          {category.skills.map((skill, idx) => (
            <div key={idx}>
              <p>{skill.name}</p>
              <SkillBarContainer>
                <PercentageLabel>{skill.level}%</PercentageLabel>
                <SkillBar>
                  <SkillLevel
                    initial={{ width: 0 }}
                    animate={{ width: inView ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1 }}
                  />
                </SkillBar>
              </SkillBarContainer>
            </div>
          ))}
        </SkillCategory>
      ))}
    </SkillsContainer>
  );
};

export default Skills;
