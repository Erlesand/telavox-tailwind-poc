interface Props {
  badge?: number;
}

const Avatar = ({ badge }: Props) => {
  return (
    <>
      {badge > 0 && (
        <div className="absolute right-0 top-0 inline-block -translate-y-1/2 translate-x-2/4 rounded-full bg-secondary w-[18px] h-[18px] text-center text-xs font-medium text-white">
          {badge}
        </div>
      )}

      <img
        className="rounded-full w-9 h-9"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
    </>
  );
};

export default Avatar;
