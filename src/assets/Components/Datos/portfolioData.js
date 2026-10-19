/* Esta parte de datos sirve para tener mis datos centralizados y llamarlos cuando necesite*/

export const personalInfo = {
    name: "Cristian Hernandez",
    role: "Analista Programador - Tecnologo Medico",
    bio: "Desarrollador Interesado en progresar aprendiendo distintos lenguajes de programacion y bases de datos.",
    avatarUrl: "https://scontent.fscl27-1.fna.fbcdn.net/v/t1.6435-9/89343691_10222017745098413_2679584912918446080_n.jpg?stp=dst-jpg_tt6&cstp=mx1511x2015&ctp=s1511x2015&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=UXTtC5UM1mYQ7kNvwGmNoYF&_nc_oc=AdqfP8ik7v3Z84L1LLcKFMqP1CQ8_koyGffyrWeAL66zFxWWR0CkHhqrWwOfaNpHNfU&_nc_zt=23&_nc_ht=scontent.fscl27-1.fna&_nc_gid=5dc5ZzVyjZ6_F5s26jR9pg&_nc_ss=7b2a8&oh=00_AQNYiext7F-ROTnsv53U4Vtsr2JbvQLEdfvoFV4owAHzQg&oe=6AFDCA29",
    socials: {
        github: "https://github.com/CristianHernandezF",
        linkedin: "https://www.linkedin.com/in/cristianhernandezfuentes/"
    }
};

export const experiences = [
    {
        id: 1,
        company: "SAR Haydee E Lopez",
        role: "Tecnologo Medico Area Rayos X",
        startDate: "Mayo 2021",
        endDate: "Junio 2021",
        description: "Encargado de sala de rayos principal en calidad de interno."
    },
    {
        id: 2,
        company: "Hospital Felix Bulnes",
        role: "Tecnologo Medico Area Resonancia Magnetica",
        startDate: "Julio 2021",
        endDate: "Agosto 2021",
        description: "Encargado de sala de resonancia principal en calidad de interno."
    },
    {
        id: 3,
        company: "Hospital de la florida",
        role: "Tecnologo Medico Area Tomografia Computarizada",
        startDate: "Septiembre 2021",
        endDate: "Octubre 2021",
        description: "Encargado de sala 2 de Tomografia Computarizada en calidad de interno."
    },
    {
        id: 4,
        company: "Bodega Falabella",
        role: "Bodegero Falabella",
        startDate: "Septiembre 2023",
        endDate: "Octubre 2023",
        description: "Encargado de bodega falabella contratado por periodo de cybers."
    },
    {
        id: 5,
        company: "INE",
        role: "Censista",
        startDate: "Marzo 2024",
        endDate: "Junio 2024",
        description: "Censista de la comuna maipu."
    }



];

export const education = [
    {
        id: 1,
        institution: "Universidad San Sebastian",
        degree: "Tecnologia Medica Con Mencion en Imagenologia y Fisica Medica",
        year: "2022",
        status: "Titulado"
    },
    {
        id: 2,
        institution: "Duoc UC",
        degree: "Analista Programador Computacional",
        year: "2026",
        status: "2° año de Carrera"
    }
];

export const projects = [
    {
        id: 1,
        title: "NubeMedica",
        description: "Aplicacion BackEnd para Profesionales particulares del area de salud.",
        repoUrl: "https://github.com/CristianHernandezF/gomez_hernandez_rodriguez_010D",
        image: "src/assets/Components/Images/Nube.jpg",
        tags: ["SpringBoot", "Java"]
    },
    {
        id: 2,
        title: "InventarioTraumed",
        description: "Aplicacion hecha en java con interfaz grafica para mantener inventario en empresa traumed",
        repoUrl: "https://github.com/CristianHernandezF/ProyectoInventarioTraumed",
        image: "src/assets/Components/Images/Traumed.png",
        tags: ["Java"]


    }
];