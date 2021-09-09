import { 
    RepositoryItem 
} from "./RepositoryItem"

import { 
    useEffect,
    useState 
} from "react"

import '../styles/repositories.scss'

type Repository = {
    name: string,
    description: string,
    html_url: string
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/DaniloSilvaNoGit/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [repositories])

    return(
        <section className="repositoryList">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />)}
            </ul>

        </section>
    )
}