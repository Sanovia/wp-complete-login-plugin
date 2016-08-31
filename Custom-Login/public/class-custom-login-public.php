<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://pk.linkedin.com/in/sanoviaibrahim
 * @since      1.0.0
 *
 * @package    Custom_Login
 * @subpackage Custom_Login/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Custom_Login
 * @subpackage Custom_Login/public
 * @author     Sanovia Ibrahim <sanovia.ibrahim@koderlabs.com>
 */
class Custom_Login_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;
           //custom
        add_shortcode( 'custom-login-form', array( $this, 'render_login_form' ) );
	}
 
    /**
 * A shortcode for rendering the login form.
 *
 * @param  array   $attributes  Shortcode attributes.
 * @param  string  $content     The text content for shortcode. Not used.
 *
 * @return string  The shortcode output
 */
public function render_login_form( $attributes, $content = null ) {
   
    $custom_form= '<div class="form">
         <div class="response"></div>
    <ul class="tab-group">
        <li class="tab-custom active"><a href="#signup">Sign Up</a></li>
        <li class="tab-custom"><a href="#login">Log In</a></li>
      </ul>
      
      <div class="tab-content">
        <div id="signup">   
          
          
          <form id="signupForm">
          
          <div class="top-row">
            <div class="field-wrap">
              
              <input type="text" name="name" class="custom-login-input" required autocomplete="off" placeholder="First Name" />
            </div>
        
            <div class="field-wrap">
             
              <input type="text" name="lastname" class="custom-login-input" required autocomplete="off" placeholder="Last Name"/>
            </div>
          </div>

          <div class="field-wrap">
          
            <input type="email" name="email" class="custom-login-input" required autocomplete="off" placeholder="Email"/>
          </div>
          
          <div class="field-wrap">
    
            <input type="password" name="pwd" class="custom-login-input" required autocomplete="off" placeholder="Password"/>
          </div>
          
          <button class="button button-block signup-btn" />Get Started</button>
          
          </form>

        </div>
        
        <div id="login">   
         
          <form id="loginForm">
          
            <div class="field-wrap">
           
            <input type="email" name="emaillogin"  class="custom-login-input" required autocomplete="off" placeholder="Email"/>
          </div>
          
          <div class="field-wrap">
            <input type="password" name="pwdlogin" class="custom-login-input" required autocomplete="off" placeholder="Password"/>
          </div>
          
          <p class="forgot"><a class="forgot-pwd" href="#forgotpassword">Forgot Password?</a></p>
          
          <button class="button button-block login-btn" />Login</button>
          
          </form>

        </div>
        
      </div><!-- tab-content -->
      <div id="forgotpwd">   
     
          <p>Forgot your password? Send your email address we will contact you shortly!</p>
          <form id="forgotpwdForm">
          
            <div class="field-wrap">
           
            <input type="email" name="emailforgotpwd" class="custom-login-input" required autocomplete="off" placeholder="Email"/>
          </div>
            <div class="field-wrap">
          <button class="button button-block forgotpwd-btn" />Send</button>
          </div>
            <p class="forgot"><a class="back-to-login" href="#">Back to Login</a></p>
          
          </form>

        </div>
      
</div>';
    echo $custom_form;	
	}
	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Custom_Login_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Custom_Login_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/custom-login-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
    /**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Custom_Login_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Custom_Login_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		 wp_enqueue_script('jqueryValidate', plugin_dir_url( __FILE__ ) . 'js/jquery.validate.js', array( 'jquery' ), $this->version, false );
        
        wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/custom-login-public.js', array( 'jquery' ), $this->version, false );
        	

	}

}