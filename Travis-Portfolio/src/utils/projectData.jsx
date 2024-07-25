import techBlog from '../../public/images/techBlog.png'
import enchantedTails from '../../public/images/enchantedTails.png'
import planner from '../../public/images/planner.png'
import textEditor from '../../public/images/textEditor.png'
import noteTaker from '../../public/images/noteTaker.png'

const projects = [
    {
        name: "Tech Blog",
        imgPath: techBlog,
        group: "fullStack",
        technologies: ["javascript", "handlebars"],
        url: "https://tech-blog-es9s.onrender.com",
        GithubUrl: "https://github.com/TravisJBlack/Tech-Blog"

    },
    {
        name: "Enchanted Tails",
        imgPath: enchantedTails,
        group: "fullStack",
        technologies: ["javascript", "handlebars", "html"],
        url: "",
        GithubUrl: "https://github.com/TravisJBlack/enchantedTailsPetResort"
    },
    {
        name: "Hotel Planner",
        imgPath: planner,
        group: "frontend",
        technologies: ["javascript", "handlebars", 'html'],
        url: "",
        GithubUrl: "https://github.com/TravisJBlack/International-Travel-Planner"
    },
    {
        name: "Text Editor",
        imgPath: textEditor,
        group: "fullStack",
        technologies: ["javascript", "handlebars"],
        url: "https://text-editor-i0rh.onrender.com",
        GithubUrl: "https://github.com/TravisJBlack/Text-Editor"
    },
    {
        name: "Note Taker",
        imgPath: noteTaker,
        group: "backend",
        technologies: ["javascript", "handlebars", 'mongodb'],
        url: "https://note-taker-0r4z.onrender.com",
        GithubUrl: "https://github.com/TravisJBlack/Note-Taker"
    }
]

export default projects;