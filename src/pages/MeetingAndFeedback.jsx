function MeetingAndFeedback() {
  return (
    <div className="pt-20 container mx-auto px-4 py-20">
      <div className="mb-6">
        <h3 className="font-bold text-xl">Daily Stand-Up</h3>
        <p className="mt-2 text-gray-700">
          Yesterday, I finished the create submission feature for the research app.<br />
          Today, I'll make sure everything works properly, then continue working on the submission list and the edit feature. <br />
          No blockers so far, but I'll need QA test results for this feature.
        </p>
        <audio controls className="mt-4">
          <source src="/voice-notes/daily-stand-up.ogg" type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div>
        <h3 className="font-bold text-xl">Feedback</h3>
        <p className="mt-2 text-gray-700">
          The create submission feature looks good, but we found a minor bug in the banner and document upload.<br />
          The upload file pop-up appears twice after selecting a file.<br />
          Maybe we can add a loading state to prevent multiple pop-ups? <br />
          Overall, great work on the feature!
        </p>
      </div>
    </div>
  );
}

export default MeetingAndFeedback;
