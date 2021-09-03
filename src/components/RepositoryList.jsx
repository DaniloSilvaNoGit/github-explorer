
import { RepositoryItem } from "./RepositoryItem"

export function RepositoryList() {

    const repositoryInfos = {
        name: "GitHub Explorer",
        description: "Projeto criado para estudar react com auxilio do curso Ignite.",
        link: "https://github.com/unform/unform"
    }

    return(
        <section className="repositoryList">
            <h1>Lista de repositórios</h1>

            <ul>
                
                <RepositoryItem repository={repositoryInfos} />
                <RepositoryItem repository={repositoryInfos} />
                <RepositoryItem repository={repositoryInfos} />
                <RepositoryItem repository={repositoryInfos} />
                
            </ul>

        </section>
    )
}