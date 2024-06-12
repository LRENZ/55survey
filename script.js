jQuery(document).ready(function () {




	var survey = {
		1: {
			'question': '您现在的主要挑战是什么？',
			'answer': {
				1: {
					'type': 'radio',
					'dynamic': true,
					'route': 2,
					'item': '广告衡量不准确,无法优化ROI'
				},
				2: {
					'type': 'radio',
					'dynamic': true,
					'route': 2,
					'item': '站内行为追踪数据不准，特别是交易追踪'
				},
				3: {
					'type': 'radio',
					'dynamic': true,
					'route': 2,
					'item': '弹窗授权率低影响广告和分析衡量已经流量变现'
				},
				4: {
					'type': 'radio',
					'dynamic': true,
					'route': 2,
					'item': '不知道下一步如何提高ROI'
				},
			}
		},
		2: {
			'question': '您现在主要是如何分析客户流程？',
			'answer': {
				1: {
					'type': 'radio',
					'dynamic': true,
					'route': 3,
					'item': '对转化的跟踪有限，主要是开箱即用的指标和预制报告'
				},
				2: {
					'type': 'radio',
					'dynamic': true,
					'route': 3,
					'item': '利用 GA4（流量、流失、同期群等）了解转化路径'
				},
				3: {
					'type': 'radio',
					'dynamic': true,
					'route': 3,
					'item': '引入线下数据以分析完整的客户旅程'
				},
				4: {
					'type': 'radio',
					'dynamic': true,
					'route': 3,
					'item': '引入（或计算）客户终身价值等预测性指标'
				},
			}
		},
		3: {
			'question': '您现在是如何进行埋点收集？',
			'answer': {
				1: {
					'type': 'radio',
					'dynamic': true,
					'route': 4,
					'item': '直接将营销代码部署到网站上，未使用标签管理解决方案/SDK'
				},
				2: {
					'type': 'radio',
					'dynamic': true,
					'route': 4,
					'item': '在客户端数据收集，使用 GTM 进行部署分析'
				},
				3: {
					'type': 'radio',
					'dynamic': true,
					'route': 4,
					'item': '使用服务端埋点和客户端埋点同时采集一方数据'
				},
				4: {
					'type': 'radio',
					'dynamic': true,
					'route': 4,
					'item': '完善埋点文档和系统，服务端埋点和客户端埋点按照使用场景准确进行部署'
				},
			}
		},
		/*4:{
			'question': 'What is your domain name?',
			'answer':{
				// 1:{
				// 	'type': 'radio',
				// 	'dynamic': true,
				// 	'route': 3,
				// 	'item': 'kavada.com'
				// },
				// 2:{
				// 	'type': 'radio',
				// 	'dynamic': true,
				// 	'route': 3,
				// 	'item': 'mathewmaione.com'
				// },
				// 3:{
				// 	'type': 'radio',
				// 	'dynamic': true,
				// 	'route': 3,
				// 	'item': 'educoded.com'
				// },
				// 4:{
				// 	'type': 'radio',
				// 	'dynamic': true,
				// 	'route': 3,
				// 	'item': 'webdevlopr.com'
				// }
				1:{
					'type': 'text',
					'dynamic': true,
					'route': 3,
					'placeholder': 'example.com',
					'identity': 'mm-dynamic-domain'
				}
			}
		},*/
		4: {
			'question': '您是否有对数据进行建模分析？',
			'answer': {
				1: {
					'type': 'radio',
					'dynamic': true,
					'route': 5,
					'item': '数据主要用于做描述性分析，无建模'
				},
				2: {
					'type': 'radio',
					'dynamic': true,
					'route': 5,
					'item': '主要依靠 GA/Google Ads 开箱即用建模'
				},
				3: {
					'type': 'radio',
					'dynamic': true,
					'route': 5,
					'item': '静态建模，模型为一次性非动态的，用于分离和预测用户。 '
				},
				4: {
					'type': 'radio',
					'dynamic': true,
					'route': 5,
					'item': '使用不同数据源进行动态实时建模和扩展'
				},
			}
		},
		5: {
			'question': '你现在是如何进行广告投放和定位？',
			'answer': {
				1: {
					'type': 'radio',
					'dynamic': true,
					'route': 6,
					'item': '严重依赖第三方 Cookie/第三方数据的广告'
				},
				2: {
					'type': 'radio',
					'dynamic': true,
					'route': 6,
					'item': '第一方数据（从网站收集，从CRM提取）推动广告的受众定义'
				},
				3: {
					'type': 'radio',
					'dynamic': true,
					'route': 6,
					'item': '基于人员的 ID（电子邮件地址、手机号码）而不是 基于cookie 用于建立受众和受众拓展'
				},
				4: {
					'type': 'radio',
					'dynamic': true,
					'route': 6,
					'item': '基于一方数据丰富受众数据并扩大受众范围同时利用第二方数据优化投放'
				},
			}
		},
		6: {
			'question': '您是否对用户提供个性化体验？',
			'answer': {
				1: {
					'type': 'radio',
					'dynamic': true,
					'route': 7,
					'item': '网站/App内容基本为静态内容，无个性化体验'
				},
				2: {
					'type': 'radio',
					'dynamic': true,
					'route': 7,
					'item': '网站/App 有进行少量的AB 测试以提供个性化体验'
				},
				3: {
					'type': 'radio',
					'dynamic': true,
					'route': 7,
					'item': '网站/App 有进行大量的AB 测试以提供个性化体验'
				},
				4: {
					'type': 'radio',
					'dynamic': true,
					'route': 7,
					'item': '网站/App 基于一方数据提供大量实际的个性化内容和推荐'
				},
			}
		},
		7: {
			'question': '你是如何进行数据治理？',
			'answer': {
				1: {
					'type': 'radio',
					'dynamic': true,
					'route': 8,
					'item': '为遵守 CCPA 和 GDPR 而制定的基本数据治理方案和原则'
				},
				2: {
					'type': 'radio',
					'dynamic': true,
					'route': 8,
					'item': '实施更全面的治理，但跨业务部门孤立'
				},
				3: {
					'type': 'radio',
					'dynamic': true,
					'route': 8,
					'item': '跨营销、广告、分析和 IT 团队的集中治理'
				},
				4: {
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': '将治理策略下至各个字段级别，用于标记、使用和实施'
				}
			}
		},
		8: {
			'question': '您是否对此次分享会感到满意？请对此次活动进行评分（分数从高到低为 5-1）',
			'answer': {
				1: {
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': '5'
				},
				2: {
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': '4'
				},
				3: {
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': '3'
				},
				4: {
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': '2'
				},
				5: {
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': '1'
				}
			}
		},

		
		/*8:{
			'question': 'What will be the primary use of your website?',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': 'blog'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': 'ecommerce'
				},
				3:{
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': 'personal / portfolio'
				},
				4:{
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': 'business'
				},
				5:{
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': 'social network / forum'
				},
				6:{
					'type': 'radio',
					'dynamic': true,
					'route': 9,
					'item': 'custom website'
				}
			}
		},
		9:{
			'question': 'Would you like to use a popular CMS to manage the content on your website?',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 10,
					'item': 'wordpress'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 10,
					'item': 'shopify'
				},
				3:{
					'type': 'radio',
					'dynamic': true,
					'route': 10,
					'item': 'magento'
				},
				4:{
					'type': 'radio',
					'dynamic': true,
					'route': 11,
					'item': 'no thanks'
				}
			}
		},
		10:{
			'question': 'Will there be someone managing the website once it\'s done?',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 11,
					'item': 'yes'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 11,
					'item': 'no'
				}
			}
		},
		11:{
			'question': 'Are there any websites that you like the design and functionality of?',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 16,
					'item': 'yes'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 12,
					'item': 'no'
				}
			}
		},
		12:{
			'question': 'Does the website need to be responsive?',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 13,
					'item': 'yes'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 13,
					'item': 'no'
				}
			}
		},
		13:{
			'question': 'Will content for the website be provided upon start?',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 14,
					'item': 'yes'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 14,
					'item': 'no'
				}
			}
		},
		14:{
			'question': 'Would you like to schedule a meeting?',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 15,
					'item': 'yes'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 17,
					'item': 'no'
				}
			}
		},
		15:{
			'question': 'When would you like to schedule a meeting to chat?',
			'answer':{
				1:{
					'type': 'date',
					'dynamic': true,
					'route': 17,
					'identity': 'mm-dynamic-date'
				}
			}
		},
		16:{
			'question': 'What type of layout do you like?',
			'answer':{
				1:{
					'type': 'radio',
					'dynamic': true,
					'route': 12,
					'item': 'full width'
				},
				2:{
					'type': 'radio',
					'dynamic': true,
					'route': 12,
					'item': 'boxed'
				}
			}
		},*/
		9: {
			'question': '我们马上就能完成问卷！但是需要您再提供一些信息方便联系您',
			'answer': {
				1: {
					'type': 'form',
					'dynamic': true,
					'route': 10,
					'placeholder': '姓名',
					'identity': 'mm-dynamic-fn-1',
					'title': '姓名'
				},
				2: {
					'type': 'form',
					'dynamic': true,
					'route': 10,
					'placeholder': '公司名称',
					'identity': 'mm-dynamic-fn-2',
					'title': '公司'
				},
				3: {
					'type': 'form',
					'dynamic': true,
					'route': 10,
					'placeholder': '手机号码',
					'identity': 'mm-dynamic-fn-3',
					'title': '手机号码或者微信号'
				},
				4: {
					'type': 'form',
					'dynamic': true,
					'route': 10,
					'placeholder': '营销经理',
					'identity': 'mm-dynamic-fn-4',
					'title': '职务'
				},

				5: {
					'type': 'form',
					'dynamic': true,
					'route': 10,
					'placeholder': '任意内容',
					'identity': 'mm-dynamic-fn-5',
					'title': '任何您想和我们交流的问题'
				},

				6: {
					'type': 'form',
					'dynamic': true,
					'route': 10,
					'placeholder': '任意内容',
					'identity': 'mm-dynamic-fn-6',
					'title': '你是否还有任何内容和主题希望我们下次分享'
				},
			}
		},
	};

	for (var i = 1; i <= Object.keys(survey).length; i++) {

		var data, container, content;
		data = survey[i];
		container = jQuery('.mm-survey-container');
		content = '<div class="mm-survey-page mm-survey-page-' + i + '" data-page="' + i + '">' +
			'<div class="mm-survery-content">' +
			'<div class="mm-survey-question"><p>' + data.question + '</p></div>' +
			'</div>' +
			'</div>';
		container.append(content);

		if (Object.keys(data.answer).length < 1) {
			jQuery('.mm-survey-page-' + i + ' .mm-survery-content').append('<p>End of the line</p>');
		}
		else {
			for (var ii = 1; ii <= Object.keys(data.answer).length; ii++) {

				var datax, containerx, contentx;
				datax = data.answer[ii];
				containerx = jQuery('.mm-survey-page-' + i + ' .mm-survery-content');

				switch (datax.type) {
					case 'radio':
						contentx = '<div class="mm-survey-item mm-dynamic">' +
							'<input type="radio" id="radio' + i + '0' + ii + '" data-group="' + i + '" data-dynamic="' + datax.route + '" data-item="' + ii + '" name="radio' + i + '" value="' + datax.item + '" />' +
							'<label for="radio' + i + '0' + ii + '"><span></span><p>' + datax.item + '</p></label>' +
							'</div>';
						break;
					case 'text':
						contentx = '<div class="mm-survey-item mm-dynamic-input">' +
							'<input type="text" class="' + datax.identity + '" data-group="' + i + '" data-dynamic="' + datax.route + '" placeholder="' + datax.placeholder + '" />' +
							'</div>';
						break;
					case 'date':
						contentx = '<div class="mm-survey-item mm-dynamic-datetime">' +
							'<input type="text" class="' + datax.identity + '" id="datetimepicker-' + i + '" data-datetimeid="' + i + '" data-group="' + i + '" data-dynamic="' + datax.route + '" data-format="mm/dd/yyyy hh:mm" />' +
							'</div>';
						break;
					case 'form':
						contentx = '<div class="mm-dynamic-form-item">' +
							'<p>' + datax.title + '</p>' +
							'<div class="mm-survey-item mm-dynamic-form">' +
							'<input type="text" class="' + datax.identity + '" data-group="' + i + '" data-dynamic="' + datax.route + '" placeholder="' + datax.placeholder + '" />' +
							'</div>' +
							'</div>';
						break;
				}

				containerx.append(contentx);

			}
		}
	}

	jQuery('.mm-survey-page:first').addClass('active mm-dynamic-active');
	jQuery('.mm-prev-btn').hide();

	var x;
	var xyz;
	var xtx;
	var count;
	var current;
	var percent;
	var z = [];

	init();
	goToNext();
	goToPrev();
	getCount();
	buildStatus();
	deliverStatus();
	submitData();
	goBack();

	function init() {

		jQuery('.mm-survey-container .mm-survey-page').each(function () {

			var item;
			var page;

			item = jQuery(this);
			page = item.data('page');

			item.addClass('mm-page-' + page);

		});

	}

	function getCount() {

		count = jQuery('.mm-survey-page').length;
		return count;

	}

	function dynamicForm() {
		jQuery('.mm-dynamic-form-item').wrapAll('<div class="mm-dynamic-form-wrap">');
		jQuery('.mm-survey-item input').on('keyup', function () {
			var item, id, form;
			item = jQuery(this);
			id = item.closest('.mm-survey-page').data('page');
			form = item.closest('.mm-dynamic-form-wrap');
			form.addClass('mm-dynamic-form-' + id);
		});
	}

	dynamicForm();

	function checkDate() {
		jQuery('.mm-dynamic-date').on('dp.change', function () {
			var item, id;
			item = jQuery(this);
			id = item.data('datetimeid');
			// jQuery('.mm-survey-page').removeClass('active');
			xyz = item.data('dynamic');
			jQuery('.mm-page-' + id).addClass('pass');
			item.parent().addClass('bingo');
			// jQuery('.mm-page-'+xyz).addClass('active mm-dynamic-active');
			buttonConfig(id);
		});
	}

	function checkDomain(e, f) {
		jQuery('.mm-dynamic-domain').on('keyup', function () {

			var domain, domainVal;

			domain = jQuery(this);
			domainVal = jQuery(this).val();
			domainVal = domainVal.toLowerCase();

			if (domainVal.length > 3 && (domainVal.indexOf(".com") >= 0 || domainVal.indexOf(".org") >= 0 || domainVal.indexOf(".net") >= 0 || domainVal.indexOf(".io") >= 0 || domainVal.indexOf(".me") >= 0 || domainVal.indexOf(".info") >= 0)) {
				domain.parent().addClass('bingo');
				jQuery('.mm-page-' + f).addClass('pass');
				buttonConfig(f);
			}
			else {
				domain.parent().removeClass('bingo');
				jQuery('.mm-page-' + f).removeClass('pass');
				buttonConfig(f);
			}

		});
	}

	function checkFirstname(e, f) {
		jQuery('.mm-dynamic-fn').on('keyup', function () {
			var item, v;
			item = jQuery(this);
			v = item.val();
			if (v.length >= 3) {
				item.parent().addClass('bingo');
				jQuery('.mm-page-' + f).addClass('pass');
				buttonConfig(f);
			}
			else {
				item.parent().removeClass('bingo');
				jQuery('.mm-page-' + f).removeClass('pass');
				buttonConfig(f);
			}
		});
	}

	function checkLastname(e, f) {
		jQuery('.mm-dynamic-ln').on('keyup', function () {
			var item, v;
			item = jQuery(this);
			v = item.val();
			if (v.length >= 3) {
				item.parent().addClass('bingo');
				jQuery('.mm-page-' + f).addClass('pass');
				buttonConfig(f);
			}
			else {
				item.parent().removeClass('bingo');
				jQuery('.mm-page-' + f).removeClass('pass');
				buttonConfig(f);
			}
		});
	}

	function checkEmail(e, f) {
		jQuery('.mm-dynamic-em').on('keyup', function () {
			var email, emailVal;

			email = jQuery(this);
			emailVal = jQuery(this).val();
			emailVal = emailVal.toLowerCase();

			if ((emailVal.indexOf("@") >= 0) && (emailVal.length > 6) && (emailVal.indexOf(".com") >= 0 || emailVal.indexOf(".org") >= 0 || emailVal.indexOf(".net") >= 0 || emailVal.indexOf(".io") >= 0 || emailVal.indexOf(".me") >= 0 || emailVal.indexOf(".info") >= 0)) {
				email.parent().addClass('bingo');
				jQuery('.mm-page-' + f).addClass('pass');
				buttonConfig(f);
			}
			else {
				email.parent().removeClass('bingo');
				jQuery('.mm-page-' + f).removeClass('pass');
				buttonConfig(f);
			}
		});
	}

	function runInputs(e, f) {
		checkDomain(e, f);
		checkFirstname(e, f);
		checkLastname(e, f);
		checkEmail(e, f);
	}

	function goToSkip() {

		jQuery('.mm-survey-item').on('click', function () {

			var item, input, xyz, y, paragraph, title, page;

			item = jQuery(this);
			page = item.closest('.mm-survey-page').data('page');
			jQuery('.mm-page-' + page + ' .mm-survey-item').removeClass('bingo');

			getCount();
			y = (count);

			if (item.hasClass('mm-dynamic')) {
				jQuery('.mm-survey-page').removeClass('active');
				input = item.children('input');
				xyz = input.data('dynamic');
				jQuery('.mm-page-' + xyz).addClass('active mm-dynamic-active').attr('data-orgin', page);
				item.addClass('bingo');
				buildButtons(xyz, y);
				buttonConfig(xyz);
			}
			else if (item.hasClass('mm-dynamic-input')) {
				page = item.closest('.mm-survey-page').data('page');
				jQuery('.mm-page-' + page).removeClass('pass');
				input = item.children('input');
				xyz = input.data('dynamic');
				jQuery('.mm-page-' + xyz).attr('data-orgin', page);
				runInputs(xyz, page);
				buildButtons(page, y);
			}
			else if (item.hasClass('mm-dynamic-datetime')) {
				page = item.closest('.mm-survey-page').data('page');
				// jQuery('.mm-page-'+page).removeClass('pass');
				input = item.children('input');
				xyz = input.data('dynamic');
				jQuery('.mm-page-' + xyz).attr('data-orgin', page);
				checkDate();
				buildButtons(page, y);
			}
			else if (item.hasClass('mm-dynamic-form')) {
				page = item.closest('.mm-survey-page').data('page');
				jQuery('.mm-page-' + page).removeClass('pass');
				input = item.children('input');
				xyz = input.data('dynamic');
				jQuery('.mm-page-' + xyz).attr('data-orgin', page);
				runInputs(xyz, page);
				buildButtons(page, y);
			}
			else {
				jQuery('.mm-survey-page').removeClass('active');
				page = item.closest('.mm-survey-page').data('page');
				jQuery('.mm-page-' + (page + 1)).addClass('active').attr('data-orgin', page);
				jQuery('.mm-page-' + page + ' .mm-survey-item').addClass('bingo');
				buildButtons((page + 1), y);
				buttonConfig(page + 1);
			}

			return x;

		});

	}

	goToSkip();

	function goToNext() {

		jQuery('.mm-next-btn').on('click', function () {
			var g, y, paragraph, title;

			goToSkip();
			getCurrentSlide();
			getCount();

			current = (x + 1);
			g = current / count;
			y = (count + 1);

			if (jQuery('.mm-page-' + x).hasClass('mm-dynamic-active')) {
				var xyz;
				xyz = jQuery('.mm-page-' + x + ' .bingo input').data('dynamic');
				buildButtons(xyz, count);
				buttonConfig(xyz);

				jQuery('.mm-survey-page').removeClass('active');
				jQuery('.mm-page-' + xyz).addClass('active mm-dynamic-active');
			}
			else {
				buildButtons(current, count);
				buttonConfig(current);

				jQuery('.mm-survey-page').removeClass('active');
				jQuery('.mm-page-' + current).addClass('active');
			}

		});

	}

	function goToPrev() {

		jQuery('.mm-prev-btn').on('click', function () {
			var g, y, paragraph, title, orgin;

			goToSkip();
			getCurrentSlide();
			getCount();

			current = (x - 1);
			g = current / count;
			y = count;

			if (jQuery('.mm-page-' + x).hasClass('mm-dynamic-active')) {
				orgin = jQuery('.mm-page-' + x).data('orgin');
				jQuery('.mm-page-' + x).removeClass('mm-dynamic-active pass');
				jQuery('.mm-page-' + x).attr('data-orgin', '');
				jQuery('.mm-page-' + x + ' input:radio').removeAttr('checked');
				jQuery('.mm-survey-page').removeClass('active');
				jQuery('.mm-page-' + orgin).addClass('active');
				buildButtons(orgin, count);
				buttonConfig(orgin);
			}
			else {
				buildButtons(current, count);
				buttonConfig(current);
				jQuery('.mm-survey-page').removeClass('active');
				jQuery('.mm-page-' + current).addClass('active');

				paragraph = jQuery('.mm-paragraph-' + current).data('paragraph');
				jQuery('.mm-paragraph-content p').html(paragraph);
				title = jQuery('.mm-page-' + current).data('group');
				jQuery('.mm-project-page-title h3').html(title);

				jQuery('.mm-slide-page-number').html(current);
			}

		});

	}

	function getCurrentSlide() {

		jQuery('.mm-survey-page').each(function () {

			var item;

			item = jQuery(this);

			if (jQuery(item).hasClass('active')) {
				x = item.data('page');
				xtx = item.data('page');
			}
			else {
				//
			}

			return x;
			return xtx;

		});

	}

	function buildButtons(a, b) {

		switch (a) {
			case 1:
				jQuery('.mm-next-btn').show();
				jQuery('.mm-prev-btn').hide();
				jQuery('.mm-finish-btn').hide();
				break;
			case b:
				jQuery('.mm-next-btn').hide();
				jQuery('.mm-prev-btn').show();
				jQuery('.mm-finish-btn').show();
				break;
			default:
				jQuery('.mm-next-btn').show();
				jQuery('.mm-prev-btn').show();
				jQuery('.mm-finish-btn').hide();
		}

	}

	function checkStatus() {
		jQuery('.mm-survery-content .mm-survey-item').on('click', function () {
			var item;
			item = jQuery(this);
			item.closest('.mm-survey-page').addClass('pass');
		});
	}

	function buildStatus() {
		jQuery('.mm-survery-content .mm-survey-item').on('click', function () {
			var item;
			item = jQuery(this);
			item.addClass('bingo');
			item.closest('.mm-survey-page').addClass('pass');
			jQuery('.mm-survey-container').addClass('good');
		});
	}

	function deliverStatus() {
		jQuery('.mm-survey-item').on('click', function () {
			if (jQuery('.mm-survey-container').hasClass('good')) {
				jQuery('.mm-survey').addClass('okay');
			}
			else {
				jQuery('.mm-survey').removeClass('okay');
			}
			buttonConfig();
		});
	}

	function lastPage() {
		if (jQuery('.mm-next-btn').hasClass('cool')) {
			alert('cool');
		}
	}

	function buttonConfig(mat) {
		if (jQuery('.mm-survey-page-' + mat).hasClass('pass')) {
			jQuery('.mm-next-btn button').addClass('ready').prop('disabled', false);
		}
		else {
			jQuery('.mm-next-btn button').removeClass('ready').prop('disabled', true);
		}
	}

	function submitData() {
		jQuery('.mm-finish-btn').on('click', function () {
			collectData();
			jQuery('.mm-survey-bottom').slideUp();
			jQuery('.mm-survey-results').slideDown();
		});
	}

	function collectData() {

		var map = {};
		var ax = ['0', 'red', 'mercedes', '3.14', '3'];
		var answer = '';
		var total = 0;
		var ttl = 0;
		var g;
		var c = 0;
		var radar_data = [];
		var newCount = jQuery('.pass .mm-survey-item.bingo').length;
		var all_data = [];
		var t ={}


		jQuery('.mm-survey-results-container .mm-survey-results-list').html('');

		jQuery('.mm-survey-item.bingo input').each(function (index, val) {
			var item, id, data, name, n;
			var obj = {}

			item = jQuery(this);
			id = item.data('group');
			data = item.val();
			name = item.data('item');
			all_data.push({
				question_id:id,
				data:data,
				name:name,
				question:survey[id].question
			})
			console.log(survey[id].question + ' - ' + data);
			if (id > 1 && id < 8) {
				radar_data.push(name)
			}
	
			// n = parseInt(data);
			// total += n;

			// map[name] = data;

		});

		radar(radar_data)
		console.log(all_data)
		var total_score = radar_data.reduce((a, b) => a + b, 0)
		var sc = score_to_solution(total_score)
		render_solution(sc)
		var t = {
			total_score: total_score,
			solution:sc,
			data:all_data,
			contact:{
				name:$(".mm-dynamic-fn-1").val()||"",
				campany:$(".mm-dynamic-fn-2").val()||"",
				phone_number:$(".mm-dynamic-fn-3").val()|"",
				role:$(".mm-dynamic-fn-4").val()||"",
				text:$(".mm-dynamic-fn-5").val()||"",
				content:$(".mm-dynamic-fn-6").val()||"",
			}
		}

		var sensor_data = {
			name:t.contact.name.toString(),
			campany:t.contact.campany.toString(),
			phone_num:t.contact.phone_number.toString(),
			mng_role:t.contact.role.toString(),
			free_text:t.contact.text.toString(),
			free_content:t.contact.content.toString(),
			solution:t.solution,
			question1:t.data[0].question.toString(),
			question1anwser:t.data[0].data.toString(),
			question2:t.data[1].question.toString(),
			question2anwser:t.data[1].data.toString(),
			question3:t.data[2].question.toString(),
			question3anwser:t.data[2].data.toString(),
			question4:t.data[3].question.toString(),
			question4anwser:t.data[3].data.toString(),
			question5:t.data[4].question.toString(),
			question5anwser:t.data[4].data.toString(),
			question6:t.data[5].question.toString(),
			question6anwser:t.data[5].data.toString(),
			question7:t.data[6].question.toString(),
			question7anwser:t.data[6].data.toString(),
			question8:t.data[7].question.toString(),
			question8anwser:t.data[7].data.toString(),
		}

		console.log(sensor_data)
		sensors.track("submit_survey",sensor_data)
		console.log(t)

		// for (i = 1; i <= count; i++) {

		// 	var t = {};
		// 	var m = {};
		// 	answer += map[i] + '<br>';

		// 	if( map[i] === ax[i]) {
		// 		g = map[i];
		// 		p = 'correct';
		// 		c = 1;
		// 	}
		// 	// else if(map[i] === undefined){
		// 	// 	g = '';
		// 	// 	p = 'incorrect';
		// 	// 	c = 0;
		// 	// }
		// 	else {
		// 		g = map[i];
		// 		p = 'incorrect';
		// 		c = 0;
		// 	}

		// 	jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item '+p+'"><span class="mm-item-number">'+i+'</span><span class="mm-item-info">'+g+' - '+p+'</span></li>');

		// 	m[i] = c;
		// 	ttl += m[i];

		// }

		// var results;
		// results = ( ( ttl / count ) * 100 ).toFixed(0);

		// jQuery('.mm-survey-results-score').html( results + '%' );

	}

	function goBack() {
		jQuery('.mm-back-btn').on('click', function () {
			jQuery('.mm-survey-bottom').slideDown();
			jQuery('.mm-survey-results').slideUp();
		});
	}

	function render_solution(solution){
		if(solution){
			for(var i=0;i<solution.length;i++){
				jQuery('.mm-survey-results-list').append('<li class="mm-survey-results-item correct"><span class="mm-item-number">' + (i + 1) + '</span><span class="mm-item-info">部署 - ' + solution[i] + '</span></li>');
			}
			
		}
	}

	jQuery('#datetimepicker-15').datetimepicker();

	function radar(data) {
		ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
		let chartConfig = {
			type: 'radar',
			plot: {
				aspect: 'area',
				animation: {
					effect: 3,
					sequence: 1,
					speed: 700,
				},
			},
			scaleV: {
				visible: false,
			},
			scaleK: {
				values: '0:5:1',
				labels: ['客户旅程', '数据收集', '数据科学', '广告投放', "个性化体验", '数据治理'],
				guide: {
					alpha: 0.3,
					backgroundColor: '#c5c5c5 #718eb4',
					lineColor: '#607D8B',
					lineStyle: 'solid',
				},
				item: {
					backgroundColor: 'white',
					borderColor: '#aeaeae',
					borderRadius: '10px',
					borderWidth: '1px',
					fontColor: '#607D8B',
					padding: '5 10',
				},
				refLine: {
					lineColor: '#c10000',
				},
				tick: {
					lineColor: '#59869c',
					lineWidth: '2px',
					lineStyle: 'dotted',
					size: 20,
				},
			},
			series: [{
				values: [4, 4, 4, 4, 4, 4],
				text: 'farm',
			},
			{
				values: data,
				backgroundColor: '#689F38',
				lineColor: '#53a534',
			},
			],
		};

		zingchart.render({
			id: 'myChart',
			data: chartConfig,
			height: '100%',
			width: '100%',
		});
	}



	function score_to_solution(data) {
		var solution;
		if (4 < data && data < 8) {
			return solution = 
				[
					"Consent Mode",
					"GTM 埋点部署",
					"Enhance Conversion",
					"Offline Conversion",
					"Customer Match",
					"Contextual Targeting"
				]
			
		}


		if (8 < data && data < 12) {
			return solution = 
				[
					"Enhance Conversion",
					"Server Side GTM",
					"Offline Conversion",
					"Customer Match",
					"Contextual Targeting"
				]
		
		}

		if (12 < data && data < 16) {
			return solution = 
				[
					"Enhance Conversion",
					"Server Side GTM",
					"Offline Conversion",
					"Customer Match",
					"Contextual Targeting",
					"AB Testing",
					"Data modeling"
				]
		
		}


		if (16 < data && data < 20) {
			return solution = 
				[
					"Enhance Conversion",
					"Server Side GTM",
					"Offline Conversion",
					"Customer Match",
					"Contextual Targeting",
					"AB Testing",
					"Data modeling",
					"Incremental Experiement",
					"1st Party Data Advertsing Platform"
				]
		
		}

		if (20 < data ) {
			return solution = 
				[
					"Enhance Conversion",
					"Server Side GTM",
					"Offline Conversion",
					"Customer Match",
					"Contextual Targeting",
					"AB Testing",
					"Data modeling",
					"Incremental Experiement",
					"1st Party Data Advertsing Platform",
					"Marketing Mix Modelling",
					"Data Clean Room"
				]
		
		}

		return [
			"Enhance Conversion",
			"Server Side GTM",
			"Offline Conversion",
			"Customer Match",
			"Contextual Targeting",
			"AB Testing",
			"Data modeling",
			"Incremental Experiement",
			"1st Party Data Advertsing Platform",
			"Marketing Mix Modelling",
			"Data Clean Room"
		]

	}



});
