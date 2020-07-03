function showEvent(e) {
    console.log("video call event -->", e);
}

async function run() {
    console.log('run');
    // create a short-lived demo room. if you just want to
    // hard-code a meeting link for testing you could do something like
    // this:
    //
    //   room = { url: 'https://your-domain.daily.co/hello' }
    //
    // room = await createMtgRoom();
    const WORKS_INFO = {
        "boyakerukyoukai": {
            'name': 'ぼやける境界',
            'daily_co_url': 'https://iiiex.daily.co/810_boyakerukyoukai'
        },
        "kehai": {
            'name': '気配のふるまい',
            'daily_co_url': 'https://iiiex.daily.co/811_kehai'
        },
        "Super_Audio_Racing": {
            'name': '大爆走！オーディオレーシング',
            'daily_co_url': "https://iiiex.daily.co/812_super_audio_racing"
        },
        "Graviter": {
            'name': 'Graviter',
            'daily_co_url': "https://iiiex.daily.co/814_graviter"
        },
        "Inside-Out_Outside-In_Or": {
            'name': 'Inside-Out,Outside-In,Or',
            'daily_co_url': "https://iiiex.daily.co/815_inside_out_outside_in_or"
        },
        "A_flog_in_his_house": {
            'name': '居の中の蛙',
            'daily_co_url': "https://iiiex.daily.co/816_a_flog_in_his_house"
        },
        "Projections_of_impressions": {
            'name': '感情の写像',
            'daily_co_url': "https://iiiex.daily.co/817_projections_of_impressions"
        },
        "emotional_distance": {
            'name': 'emotional distance',
            'daily_co_url': "https://iiiex.daily.co/818_emotional_distance"
        },
        "NUM": {
            'name': 'NUM. (Ningen Unique Mirror)',
            'daily_co_url': "https://iiiex.daily.co/819_num"
        },
        "with_rain": {
            'name': '対雨',
            'daily_co_url': "https://iiiex.daily.co/820_with_rain"
        }
    };

    let path = location.pathname;
    let works_name = path.match(/^\/works\/([^\/]+).*/);
    let daily_co_url = WORKS_INFO[works_name[1]]['daily_co_url'];
    room = { url: `https://iiiex.daily.co/${daily_co_url}` }

    // create a video call iframe and add it to document.body
    // defaults to floating window in the lower right-hand corner
    //
    let date = new Date();
    window.callFrame = window.DailyIframe.createFrame({
        userName: `visitor${date.toLocaleTimeString()}`,
    });

    // callFrame = window.DailyIframe.createFrame({
    //   iframeStyle: {
    //     position: 'fixed',
    //     border: 0,
    //     top: 0, left: 0,
    //     width: '100%',
    //     height: '100%'
    //   }
    // });
    // callFrame.join({ url: 'https://your-team.daily.co/hello' });

    // install event handlers that just print out event information
    // to the console
    //
    callFrame
        .on("loading", showEvent)
        .on("loaded", showEvent)
        .on("started-camera", showEvent)
        .on("camera-error", showEvent)
        .on("joining-meeting", showEvent)
        .on("joined-meeting", showEvent)
        .on("participant-joined", showEvent)
        .on("participant-updated", showEvent)
        .on("participant-left", showEvent)
        .on("recording-started", showEvent)
        .on("recording-stopped", showEvent)
        .on("recording-stats", showEvent)
        .on("recording-error", showEvent)
        .on("recording-upload-completed", showEvent)
        .on("app-message", showEvent)
        .on("input-event", showEvent)
        .on("error", showEvent)
        // add a leave handler to clean things up
        .on("left-meeting", leave);

    // join the room
    //
    await callFrame.join({
        url: room.url,
        showLeaveButton: true
    });

    function leave(e) {
        showEvent(e);
        callFrame.destroy();
    }

    console.log(
        " You are connected to",
        callFrame.properties.url,
        "\n",
        "Use the window.callFrame object to experiment with",
        "\n",
        "controlling this call. For example, in the console",
        "\n",
        "try",
        "\n",
        "    callFrame.participants()",
        "\n",
        "    callFrame.setLocalVideo(false)",
        "\n",
        "    callFrame.startScreenShare()"
    );
}