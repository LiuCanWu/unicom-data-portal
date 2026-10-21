<template>
  <div class="contact-page">
    <section class="contact-visual" aria-label="产品咨询">
      <div class="visual-grid" />
      <div class="visual-copy">
        <p class="visual-kicker">UNICOM DATA INTELLIGENCE</p>
        <h1>连接数据智能，<br /><span>开启业务新可能</span></h1>
        <p>产品咨询通道正在准备中，开放时间请以正式通知为准。</p>
      </div>

      <div class="product-scene" aria-hidden="true">
        <div class="scene-glow" />
        <div class="scene-card scene-card--left">
          <i /><b>数据洞察</b><small>更快发现业务机会</small>
        </div>
        <div class="scene-card scene-card--main">
          <div class="scene-avatar">U</div><i /><b>联通数据智能</b><small>连接数据 · 释放价值</small>
        </div>
        <div class="scene-card scene-card--right">
          <i /><b>AI 数据服务</b><small>让决策更智慧</small>
        </div>
      </div>
      <div class="visual-orb orb-one" /><div class="visual-orb orb-two" />
    </section>

    <section class="contact-form-section">
      <div class="form-wrap">
        <header class="form-heading">
          <p>BUSINESS CONSULTATION</p>
          <h2>业务咨询</h2>
          <span>咨询通道正在准备中，暂不收集联系信息</span>
        </header>

        <p v-if="!contactApiEnabled" class="form-note">在线咨询功能尚未开通。请通过已确认的线下渠道联系产品团队。</p>
        <el-form v-else ref="formRef" :model="form" :rules="rules" label-position="left" label-width="108px" class="contact-form">
          <el-form-item label="联系人" prop="name" required>
            <el-input v-model="form.name" placeholder="请输入联系人姓名" maxlength="30" />
          </el-form-item>
          <el-form-item label="联系电话" prop="phone" required>
            <el-input v-model="form.phone" placeholder="请输入联系人手机号码" maxlength="11" />
          </el-form-item>
          <el-form-item label="验证码" prop="code" required>
            <div class="code-row">
              <el-input v-model="form.code" placeholder="请输入验证码" maxlength="6" />
              <el-button class="send-code" :disabled="countdown > 0 || !isPhoneValid" @click="sendCode">
                {{ countdown ? `${countdown} 秒后重发` : '发送验证码' }}
              </el-button>
            </div>
          </el-form-item>
          <el-form-item label="公司名称" prop="company" required>
            <el-input v-model="form.company" placeholder="请输入公司名称" maxlength="60" />
          </el-form-item>
          <el-form-item label="咨询问题（可选）" prop="question" class="question-item">
            <el-input v-model="form.question" type="textarea" :rows="4" maxlength="255" show-word-limit placeholder="请描述您希望咨询的产品、业务场景或具体需求" />
          </el-form-item>
          <el-form-item prop="agreed" class="agreement-item">
            <el-checkbox v-model="form.agreed">我已阅读并同意<a href="#">《服务条款》</a>和<a href="#">《隐私政策》</a></el-checkbox>
          </el-form-item>
          <el-button type="primary" class="submit-button" :loading="submitting" @click="submitForm">提交咨询</el-button>
        </el-form>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, reactive, ref } from 'vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { createContact } from '../api/contacts'

// 静态演示站不提供联系人收集；待真实 API、短信验证和公开文案核准后另行启用。
const contactApiEnabled = false

const formRef = ref<FormInstance>()
const submitting = ref(false)
const countdown = ref(0)
let timer: ReturnType<typeof setInterval> | undefined

const form = reactive({ name: '', phone: '', code: '', company: '', question: '', agreed: false })
const isPhoneValid = computed(() => /^1[3-9]\d{9}$/.test(form.phone))
const rules: FormRules = {
  name: [{ required: true, message: '请输入联系人姓名', trigger: 'blur' }],
  phone: [{ required: true, message: '请输入联系电话', trigger: 'blur' }, { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur' }],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
  company: [{ required: true, message: '请输入公司名称', trigger: 'blur' }],
  agreed: [{ validator: (_rule, value, callback) => value ? callback() : callback(new Error('请阅读并同意服务条款和隐私政策')), trigger: 'change' }],
}

function sendCode() {
  if (!isPhoneValid.value) return
  countdown.value = 60
  ElMessage.success('验证码已发送，请注意查收短信')
  timer = setInterval(() => {
    countdown.value -= 1
    if (countdown.value <= 0 && timer) clearInterval(timer)
  }, 1000)
}

async function submitForm() {
  const valid = await formRef.value?.validate().catch(() => false)
  if (!valid) return
  submitting.value = true
  try {
    await createContact({
      name: form.name,
      phone: form.phone,
      company: form.company,
      question: form.question,
    })
    submitting.value = false
    ElMessage.success('咨询已提交，我们会尽快与您联系')
    formRef.value?.resetFields()
  } catch {
    ElMessage.error('提交失败，请稍后重试或拨打客服电话')
  } finally {
    submitting.value = false
  }
}

onBeforeUnmount(() => { if (timer) clearInterval(timer) })
</script>

<style scoped>
.contact-page { min-height: calc(100vh - var(--header-height)); display: grid; grid-template-columns: minmax(420px, 1fr) minmax(580px, 1fr); background: #fff; }
.contact-visual { position: relative; overflow: hidden; min-height: 760px; padding: clamp(70px, 12vh, 150px) clamp(42px, 9vw, 150px); background: linear-gradient(145deg, #eaf2ff 0%, #f5f7ff 58%, #e4fbff 100%); }
.visual-grid { position: absolute; inset: 0; opacity: .33; background-image: linear-gradient(rgba(100, 148, 235, .14) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 148, 235, .14) 1px, transparent 1px); background-size: 38px 38px; mask-image: linear-gradient(to bottom, #000, transparent 72%); }
.visual-copy { position: relative; z-index: 2; max-width: 560px; }.visual-kicker, .form-heading > p { color: #3576e9; font-size: 12px; font-weight: 700; letter-spacing: 1.7px; }.visual-copy h1 { margin: 12px 0 18px; color: #14213d; font-size: clamp(36px, 3.1vw, 54px); line-height: 1.22; }.visual-copy h1 span { color: #3477ee; }.visual-copy > p:last-child { max-width: 470px; color: #5f6f88; font-size: 16px; line-height: 1.9; }
.product-scene { position: absolute; z-index: 2; top: 46%; left: 50%; width: min(520px, 82%); height: 245px; transform: translateX(-50%); }.scene-glow { position: absolute; inset: 45px -35px -35px; border-radius: 50%; background: radial-gradient(ellipse, rgba(72, 139, 255, .24), transparent 67%); filter: blur(14px); }.scene-card { position: absolute; width: 210px; min-height: 142px; padding: 29px 20px; border: 1px solid rgba(255,255,255,.84); border-radius: 14px; background: rgba(255,255,255,.80); box-shadow: 0 18px 36px rgba(48, 91, 167, .16); backdrop-filter: blur(8px); }.scene-card i { display: block; width: 34px; height: 7px; margin-bottom: 16px; border-radius: 9px; background: linear-gradient(90deg, #5ca1ff, #9bc7ff); }.scene-card b { display: block; color: #253b61; font-size: 16px; }.scene-card small { display: block; margin-top: 8px; color: #8492a8; font-size: 11px; }.scene-card--main { z-index: 3; top: 0; left: 50%; min-height: 180px; transform: translateX(-50%); background: rgba(255,255,255,.94); }.scene-card--left { top: 43px; left: 0; }.scene-card--right { top: 43px; right: 0; }.scene-avatar { float: right; width: 31px; height: 31px; display: grid; place-items: center; border-radius: 50%; color: #fff; background: linear-gradient(135deg,#498fff,#714ff4); font-size: 13px; font-weight: 700; }.visual-orb { position: absolute; border-radius: 50%; filter: blur(1px); }.orb-one { width: 320px; height: 320px; right: -130px; bottom: -125px; background: radial-gradient(circle at 30% 30%, #b59cff, #6d58ef 40%, #36dcdb 72%, transparent 73%); opacity: .72; }.orb-two { width: 190px; height: 190px; left: -110px; bottom: -88px; border: 18px solid #b5d6ff; opacity: .65; }
.contact-form-section { display: flex; align-items: center; justify-content: center; padding: 72px 44px; }.form-wrap { width: min(100%, 490px); }.form-heading { margin-bottom: 36px; text-align: center; }.form-heading > p { margin: 0 0 4px; font-size: 10px; }.form-heading h2 { margin: 0; color: #14213d; font-size: 34px; }.form-heading span { color: #53627a; font-size: 14px; }.contact-form :deep(.el-form-item) { margin-bottom: 20px; }.contact-form :deep(.el-form-item__label) { height: 40px; color: #243858; font-size: 15px; line-height: 40px; }.contact-form :deep(.el-input__wrapper), .contact-form :deep(.el-textarea__inner) { box-shadow: 0 0 0 1px #d9e1ed inset; }.contact-form :deep(.el-input__wrapper) { min-height: 42px; }.contact-form :deep(.el-input__wrapper.is-focus), .contact-form :deep(.el-textarea__inner:focus) { box-shadow: 0 0 0 1px var(--color-primary) inset; }.code-row { display: flex; width: 100%; }.code-row .el-input { flex: 1; }.send-code { width: 122px; margin-left: 8px; padding: 0 8px; color: var(--color-primary); }.question-item :deep(.el-form-item__label) { height: auto; padding-top: 8px; line-height: 1.55; }.agreement-item { margin-top: 2px; margin-bottom: 18px !important; }.agreement-item :deep(.el-form-item__content) { line-height: 1.4; }.agreement-item :deep(.el-checkbox__label) { color: #56657b; font-size: 13px; }.agreement-item a, .form-note a { color: var(--color-primary); }.submit-button { width: 100%; min-height: 46px; font-size: 16px; font-weight: 600; box-shadow: 0 8px 18px rgba(21,101,216,.2); }.form-note { margin: 62px 0 0; color: #758299; text-align: center; font-size: 12px; line-height: 1.85; }
@media (max-width: 960px) { .contact-page { grid-template-columns: 1fr; }.contact-visual { min-height: 430px; padding-top: 70px; }.product-scene { top: 48%; transform: translateX(-50%) scale(.78); transform-origin: top center; }.contact-form-section { padding: 62px 28px; }.form-note { margin-top: 38px; } }
@media (max-width: 560px) { .contact-visual { min-height: 390px; padding: 55px 24px; }.visual-copy h1 { font-size: 34px; }.visual-copy > p:last-child { font-size: 14px; }.product-scene { width: 500px; transform: translateX(-50%) scale(.62); }.contact-form-section { padding: 48px 20px; }.form-heading h2 { font-size: 30px; }.contact-form :deep(.el-form-item) { display: block; }.contact-form :deep(.el-form-item__label) { display: block; height: auto; text-align: left; line-height: 1.5; }.question-item :deep(.el-form-item__label) { padding-top: 0; }.code-row { gap: 6px; }.send-code { width: 112px; margin-left: 0; font-size: 12px; }.form-note { margin-top: 34px; } }
</style>
