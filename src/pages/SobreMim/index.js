import styles from "./SobreMim.module.css"
import PostModelo from "components/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/fotoPS.jpg"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Paulo
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto de Paulo Sodré"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou Desenvolvedor Software e estou feliz de te ver por aqui.
            </p>

            <p className={styles.paragrafo}>
                Eu sempre fui um entusiasta das tecnologias e muito curioso para saber como as coisas funcionam por dentro, mas a minha história na programação só começou de fato na faculdade, onde eu tive oportunidade de absorver conhecimentos diversos sobre tecnologia, computação e programação.
            </p>

            <p className={styles.paragrafo}>
                Eu sempre fui gamer desde muito pequeno e por conta dessa paixão nasceu uma vontade de programar para jogos, alinhado ao talento natural para o desenho. Inclusive obtive uma experiência recente em um estúdio de jogos independente, que reascendeu esse sonho deixado de lado por uma necessidade de estar inserido de imediato no mercado de trabalho.
            </p>

            <p className={styles.paragrafo}>
                Ainda estou em um período de transição de carreira, mas já atuei no Desenolvimento Front-End em uma grande multinacional, onde pude aprimorar minhas skills e conhecer com mais profundidade o Vue.js. Framework que conheci ainda no estágio curricular obrigatório que prestei anteriormente.
            </p>

            <p className={styles.paragrafo}>
                Atualmente sigo estudando em programas de formação como ONE, Desenvolve e Trilhas Inova Maranhão. Nesses programas eu pude aprender de tudo um pouco, pois em cada um realizo uma trilha específica: Front-End, Full-Stack e Programação de Jogos, respectivamente. Nessas formações pude consolidar ainda mais o conhecimento adquirido na faculdade e também nas breves experiências de trabalho que possuo dentro da área. Ainda assim, é um conhecimento valioso adquirido durante meses a fio, com muita dedicação, determinação e esforço. Na esperança de começar a trilhar o caminho do sucesso na tecnologia.
            </p>

            <p className={styles.paragrafo}>
                Tudo que aprendi até aqui, foi e será muito bem aproveitado em um futuro próximo, onde me aguarda uma carreira promissora, cheia de desafios mas com as portas abertas para muita realização e sucesso!
            </p>
        </PostModelo>
    )
}