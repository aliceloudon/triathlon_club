TimeTrial.destroy_all
Member.destroy_all
Result.destroy_all

m1 = Member.create({name:'Alice Loudon'})

t1 = TimeTrial.create({title:'Inverleith', date:'2017-01-11', discipline:'run', distance:'3km'})

r1 = Result.create({time:812, member_id:1, timetrial_id:1})