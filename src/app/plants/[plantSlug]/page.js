export default async function PlantsDetails({ params }) {
    // params return is a promise..
    const { plantSlug } = await params;
    return (
        <div className="flex justify-center items-center mx-auto w-2xl text-gray-300 text-4xl h-10">
            <h1>Plants Page - { plantSlug }</h1>
        </div>
    )
}
