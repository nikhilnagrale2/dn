const Templates = ({ templates, setMeme }) => {
  return (
    <div className="templates">
      {templates.map((template) => {
        return (
          <div
            key={template.id}
            className="template"
            onClick={() => {
              setMeme(template);
            }}
          >
            <div
              style={{ backgroundImage: `url(${template.url})` }}
              className="image"
            ></div>
            <div>{template.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Templates;
