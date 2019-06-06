const scorm = pipwerks.SCORM
const success = scorm.init()

const p = new Promise((resolve, reject)=>{
  success 
    ? resolve({
      'suspend': scorm.get('cmi.suspend_data'),
      'sessionTime':scorm.get('cmi.core.session_time'),
      'totalTime': scorm.get('cmi.core.total_time')
    }) 
    : reject('failed')
})

p
  .then((msg)=>{console.log(msg)})
  .catch((err)=>{console.log(err)})