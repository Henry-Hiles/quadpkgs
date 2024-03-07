import { Data } from "dataclass"

export default class Package extends Data {
    title: string
    description: string
    installScript: string
    source: URL
    homepage: URL
    maintainers: Array<Maintainer>
}
