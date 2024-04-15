const MediaEmbed = ({ mediaSrc }: { mediaSrc: string; }): JSX.Element => {

    return (
        <>
            <iframe src={mediaSrc}></iframe>
        </>
    )
}
export default MediaEmbed