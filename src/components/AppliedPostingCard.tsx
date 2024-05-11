const AppliedPostingCard = ({posting}) => {
  return (
    <div className="bg-gray-200 w-64 h-24 rounded-md shadow-md px-2 py-2 flex flex-col justify-center gap-1">
      <div className="font-semibold">
        {posting.posting_role}
      </div>
      <div className="font-medium text-xs">
        {posting.org_name}
      </div>
      <div className="font-medium text-xs">
        Status : {posting.status}
      </div>
    </div>
  )
}

export default AppliedPostingCard
