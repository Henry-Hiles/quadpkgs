import Package from "../models/package"

export default Package.create({
    title: "foo",
    description: "desc",
    homepage: new URL("https://foo.com"),
    source: new URL("https://foo.com"),
    maintainers: [],
    installScript: "",
})
