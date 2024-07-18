export interface PersonalInfo {
  firstName: string;
  lastName: string;
  nickname: string;
  title: string;
  summary: string;
  bio: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  avatarUrl: string;
  backgroundUrl: string;
}

export const personalInfo: PersonalInfo = {
  firstName: "Valdir",
  lastName: "Ronis",
  nickname: "Xogum",
  title: "Desenvolvedor Full-Stack",
  location: {
    city: "Fortaleza",
    state: "Ceará",
    country: "Brasil",
  },
  avatarUrl: "https://github.com/x1db.png?size=200",
  backgroundUrl:
    "https://images.pexels.com/photos/5926397/pexels-photo-5926397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  summary:
    "Desenvolvedor Full-Stack com 10+ anos de experiência em PHP, JavaScript e MongoDB. Experiência comprovada na criação de soluções de software personalizadas, sistemas complexos e aplicativos web e mobile. Forte capacidade de gestão de projetos, trabalho autônomo e colaborativo.",
  bio: "Desenvolvedor Full-Stack apaixonado por tecnologia e inovação, com 10+ anos de experiência em PHP, JavaScript e MongoDB. Tenho um histórico comprovado na criação de soluções de software personalizadas, desde sistemas complexos até aplicativos web e mobile. Sou um profissional proativo, com forte capacidade de gestão de projetos, trabalho autônomo e colaborativo. Além da programação, sou um entusiasta de música e games.",
};
