const start = new Date().getTime()



const completButton = document.querySelector('button.complete')



completButton.addEventListener('click', ()=>{
  saveTotalTime()
})


window.addEventListener('beforeunload', function(){
  saveTotalTime()
})

const saveTotalTime = ()=>{
  const end = new Date().getTime()

  const diff = end - start

  console.log(new Date(diff))
  console.log(new Date(diff).toISOString())

  const sessionTime = new Date(diff).toISOString().slice(11,-2)

  scorm.set('cmi.core.session_time', sessionTime)
  scorm.save()
  scorm.quit()

  // parent.window.parent.close()
}