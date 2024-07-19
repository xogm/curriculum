export interface PersonalInfo {
  firstName: string;
  lastName: string;
  nickname: string;
  title: string;
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
  bio: "Apaixonado por tecnologia e inovação. Sempre buscando novas oportunidades para aplicar minhas habilidades e contribuir para o sucesso de projetos desafiadores.",
};
