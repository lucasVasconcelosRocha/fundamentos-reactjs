import { RepositoryItem } from "./RepositoryItem"

const repository = {
    name: "repository",
    description: "it's a repository",
    link: "https://github.com/lucasVasconcelosRocha"

}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            
            <ul>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}