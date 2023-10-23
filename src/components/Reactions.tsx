interface Props {
  reactions: Reaction[];
}

interface Reaction {
  icon: string;
}

const Reactions = ({ reactions }: Props) => {
  return reactions?.map((reaction) => (
    <div className="px-2 border rounded">{reaction.icon} 1</div>
  ));
};

export default Reactions;
