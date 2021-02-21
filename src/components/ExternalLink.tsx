const ExternalLink = (props) => <a {...props} rel='noopener' target={props.target || '_blank'} />;

export default ExternalLink;
