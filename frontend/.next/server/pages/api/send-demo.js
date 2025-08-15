"use strict";(()=>{var a={};a.id=995,a.ids=[995],a.modules={2541:(a,b,c)=>{c.r(b),c.d(b,{config:()=>o,default:()=>n,handler:()=>q});var d={};c.r(d),c.d(d,{default:()=>k});var e=c(9046),f=c(8667),g=c(3480),h=c(6435),i=c(4376),j=c(8079);async function k(a,b){if("POST"!==a.method)return b.status(405).json({success:!1,message:"Method tidak diizinkan"});try{let{error:c,value:d}=j.T.validate(a.body);if(c)return b.status(400).json({success:!1,message:"Data tidak valid",errors:c.details.map(a=>({field:a.path[0],message:a.message}))});let e=await (0,i.i)(d);return b.status(200).json({success:!0,message:"Permintaan demo berhasil dikirim",data:{messageId:e.messageId}})}catch(a){return console.error("Error in send-demo API:",a),b.status(500).json({success:!1,message:"Terjadi kesalahan internal server",error:void 0})}}var l=c(8112),m=c(8766);let n=(0,h.M)(d,"default"),o=(0,h.M)(d,"config"),p=new g.PagesAPIRouteModule({definition:{kind:f.A.PAGES_API,page:"/api/send-demo",pathname:"/api/send-demo",bundlePath:"",filename:""},userland:d,distDir:".next",projectDir:""});async function q(a,b,c){let d=await p.prepare(a,b,{srcPage:"/api/send-demo"});if(!d){b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve());return}let{query:f,params:g,prerenderManifest:h}=d;try{let c=a.method||"GET",d=(0,l.getTracer)(),e=d.getActiveScopeSpan(),i=p.instrumentationOnRequestError.bind(p),j=async e=>p.render(a,b,{query:{...f,...g},params:g,allowedRevalidateHeaderKeys:void 0,multiZoneDraftMode:!0,trustHostHeader:void 0,previewProps:h.preview,propagateError:!1,dev:p.isDev,page:"/api/send-demo",projectDir:"",onError:(...b)=>i(a,...b)}).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let f=d.getRootSpanAttributes();if(!f)return;if(f.get("next.span_type")!==m.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${f.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let g=f.get("next.route");if(g){let a=`${c} ${g}`;e.setAttributes({"next.route":g,"http.route":g,"next.span_name":a}),e.updateName(a)}else e.updateName(`${c} ${a.url}`)});e?await j(e):await d.withPropagatedContext(a.headers,()=>d.trace(m.BaseServerSpan.handleRequest,{spanName:`${c} ${a.url}`,kind:l.SpanKind.SERVER,attributes:{"http.method":c,"http.target":a.url}},j))}catch(a){if(p.isDev)throw a;(0,e.sendError)(b,500,"Internal Server Error")}finally{null==c.waitUntil||c.waitUntil.call(c,Promise.resolve())}}},4376:(a,b,c)=>{c.d(b,{P:()=>h,i:()=>g});let d=require("nodemailer");var e=c.n(d);let f=()=>e().createTransport({host:process.env.SMTP_HOST,port:parseInt(process.env.SMTP_PORT||"587"),secure:!1,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}}),g=async a=>{try{let b=f(),c=(a=>({subject:`Demo Request dari ${a.name} - ${a.companyName}`,html:`
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Demo Request Baru</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
          <p><strong>Nama:</strong> ${a.name}</p>
          <p><strong>Email:</strong> ${a.email}</p>
          <p><strong>Perusahaan:</strong> ${a.companyName}</p>
          <p><strong>Nomor Telepon:</strong> ${a.phoneNumber}</p>
          ${a.linkedinUrl?`<p><strong>LinkedIn:</strong> <a href="${a.linkedinUrl}" target="_blank">${a.linkedinUrl}</a></p>`:""}
          <p><strong>Pesan:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 3px; margin-top: 10px;">
            ${a.message.replace(/\n/g,"<br>")}
          </div>
        </div>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          Email ini dikirim otomatis dari form demo request di website Manusia.ai
        </p>
      </div>
    `,text:`
Demo Request Baru

Nama: ${a.name}
Email: ${a.email}
Perusahaan: ${a.companyName}
Nomor Telepon: ${a.phoneNumber}
${a.linkedinUrl?`LinkedIn: ${a.linkedinUrl}`:""}

Pesan:
${a.message}
    `}))(a),d=await b.sendMail({from:`"Demo Request" <${process.env.SMTP_USER}>`,to:process.env.DEMO_EMAIL_TO,replyTo:a.email,...c});return{success:!0,messageId:d.messageId}}catch(a){throw console.error("Error sending demo email:",a),a}},h=async a=>{try{let b=f(),c=(a=>({subject:`Pesan Kontak dari ${a.name} - ${a.companyName}`,html:`
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Pesan Kontak Baru</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 5px;">
          <p><strong>Nama:</strong> ${a.name}</p>
          <p><strong>Email:</strong> ${a.email}</p>
          <p><strong>Perusahaan:</strong> ${a.companyName}</p>
          <p><strong>Nomor Telepon:</strong> ${a.phoneNumber}</p>
          <p><strong>Pesan:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 3px; margin-top: 10px;">
            ${a.message.replace(/\n/g,"<br>")}
          </div>
        </div>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          Email ini dikirim otomatis dari form kontak di website Manusia.ai
        </p>
      </div>
    `,text:`
Pesan Kontak Baru

Nama: ${a.name}
Email: ${a.email}
Perusahaan: ${a.companyName}
Nomor Telepon: ${a.phoneNumber}

Pesan:
${a.message}
    `}))(a),d=await b.sendMail({from:`"Contact Form" <${process.env.SMTP_USER}>`,to:process.env.CONTACT_EMAIL_TO,replyTo:a.email,...c});return{success:!0,messageId:d.messageId}}catch(a){throw console.error("Error sending contact email:",a),a}}},5600:a=>{a.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},8079:(a,b,c)=>{c.d(b,{y:()=>g,T:()=>f});let d=require("joi");var e=c.n(d);let f=e().object({name:e().string().min(2).max(100).required().messages({"string.empty":"Nama wajib diisi","string.min":"Nama minimal 2 karakter","string.max":"Nama maksimal 100 karakter","any.required":"Nama wajib diisi"}),email:e().string().email({tlds:{allow:!1}}).required().messages({"string.empty":"Email wajib diisi","string.email":"Format email tidak valid","any.required":"Email wajib diisi"}),companyName:e().string().min(2).max(100).required().messages({"string.empty":"Nama perusahaan wajib diisi","string.min":"Nama perusahaan minimal 2 karakter","string.max":"Nama perusahaan maksimal 100 karakter","any.required":"Nama perusahaan wajib diisi"}),phoneNumber:e().string().pattern(/^[0-9+\-\s\(\)]+$/).min(10).max(20).required().messages({"string.empty":"Nomor telepon wajib diisi","string.pattern.base":"Format nomor telepon tidak valid","string.min":"Nomor telepon minimal 10 karakter","string.max":"Nomor telepon maksimal 20 karakter","any.required":"Nomor telepon wajib diisi"}),linkedinUrl:e().string().uri().pattern(/^https:\/\/(?:www\.)?linkedin\.com\//).allow("").optional().messages({"string.uri":"URL LinkedIn tidak valid","string.pattern.base":"Harus berupa URL LinkedIn yang valid"}),message:e().string().min(10).max(1e3).required().messages({"string.empty":"Pesan wajib diisi","string.min":"Pesan minimal 10 karakter","string.max":"Pesan maksimal 1000 karakter","any.required":"Pesan wajib diisi"})}),g=e().object({name:e().string().min(2).max(100).required().messages({"string.empty":"Nama wajib diisi","string.min":"Nama minimal 2 karakter","string.max":"Nama maksimal 100 karakter","any.required":"Nama wajib diisi"}),email:e().string().email({tlds:{allow:!1}}).required().messages({"string.empty":"Email wajib diisi","string.email":"Format email tidak valid","any.required":"Email wajib diisi"}),companyName:e().string().min(2).max(100).required().messages({"string.empty":"Nama perusahaan wajib diisi","string.min":"Nama perusahaan minimal 2 karakter","string.max":"Nama perusahaan maksimal 100 karakter","any.required":"Nama perusahaan wajib diisi"}),phoneNumber:e().string().pattern(/^[0-9+\-\s\(\)]+$/).min(10).max(20).required().messages({"string.empty":"Nomor telepon wajib diisi","string.pattern.base":"Format nomor telepon tidak valid","string.min":"Nomor telepon minimal 10 karakter","string.max":"Nomor telepon maksimal 20 karakter","any.required":"Nomor telepon wajib diisi"}),message:e().string().min(10).max(1e3).required().messages({"string.empty":"Pesan wajib diisi","string.min":"Pesan minimal 10 karakter","string.max":"Pesan maksimal 1000 karakter","any.required":"Pesan wajib diisi"})})}};var b=require("../../webpack-api-runtime.js");b.C(a);var c=b.X(0,[169],()=>b(b.s=2541));module.exports=c})();